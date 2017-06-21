import { Component, OnInit } from '@angular/core';
import { ChallengeSettingsService } from '../shared/challenge-settings.service'

@Component({
  selector: 'app-challenge-settings',
  templateUrl: './challenge-settings.component.html',
  styleUrls: ['./challenge-settings.component.scss']
})
export class ChallengeSettingsComponent implements OnInit {

  guesses = '0';
  myFood = 'lamb';
  show = false;
  constructor(private settings : ChallengeSettingsService) {

  }

  ngOnInit() {
    this.guesses = String(this.settings.currentSettings.guesses);
  }

  onSelectionChange(value) {
    let nbr = Number(value['guesses-radio']);
    // propagate settings to subscribed components
    this.settings.emitSettings({guesses: nbr });
  }

  onShow(show) {
    this.show = show;
  }

}
