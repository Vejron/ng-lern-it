import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeSettingsService } from '../shared/challenge-settings.service'
import { RandomService } from '../shared/random.service';

@Component({
  selector: 'app-challenge-multi-input',
  templateUrl: './challenge-multi-input.component.html',
  styleUrls: ['./challenge-multi-input.component.scss']
})
export class ChallengeMultiInputComponent implements OnInit, OnChanges {
  @Input() challenge;
  @Output() answerSelected = new EventEmitter();

  public sugestions = [1, 2, 3];

  constructor(
    private settings : ChallengeSettingsService,
    private randomService : RandomService) {}


  ngOnInit() {
    // subscribe for settings updates
    this.settings.settingsStream$.subscribe(
      settings => {
        this.updateView(settings.guesses);
        console.log(`set to ${settings.guesses} guesses`);
      });
  }

  ngOnChanges(changeRecord) {
    if(changeRecord.challenge) {
      if(this.sugestions.length > 0) {
        this.sugestions = this.randomService.getPositiveRandomIntArray(this.sugestions.length, this.challenge.result);
      }
    }
  }

  onSubmitAnswer(index) {
    console.log(this.sugestions[index]);
    this.answerSelected.emit(this.sugestions[index]);
  }

  private updateView(guesses : number) {
    this.sugestions = this.randomService.getPositiveRandomIntArray(guesses, this.challenge.result);
  }
}
