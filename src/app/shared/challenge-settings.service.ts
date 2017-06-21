import { Injectable } from '@angular/core';
import { BehaviorSubject}    from 'rxjs/Rx';

@Injectable()
export class ChallengeSettingsService {

  // settings model
  currentSettings : any;

  // Observable any sources
  private settingsStreamSource;

  // Observable any streams
  settingsStream$;

  constructor() {
    // read stored settings
    let settings = this.load();
    if(settings) {
      this.currentSettings = settings;
    } else {
      // no previus settings found. default
      this.currentSettings = {guesses: 0};
    }

    this.settingsStreamSource = new BehaviorSubject<any>(this.currentSettings);
    this.settingsStream$ = this.settingsStreamSource.asObservable();
  }

  // Service message commands
  emitSettings(settings: any) {
    this.settingsStreamSource.next(settings);
    this.store(settings);
  }

  private store(settings: any) {
    localStorage.setItem('challenge-settings', JSON.stringify(settings));
  }

  private load() : any {
    try {
      return JSON.parse(localStorage.getItem('challenge-settings'));
    } catch (error) {
      console.warn(error + ' no valid previus settings found');
      return null;
    }
  }
}
