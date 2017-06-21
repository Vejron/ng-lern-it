import { Component, OnInit, ViewChild } from '@angular/core';
import { ChallengeViewComponent } from '../challenge-view/challenge-view.component'

@Component({
  selector: 'app-challenge-generator',
  templateUrl: './challenge-generator.component.html',
  styleUrls: ['./challenge-generator.component.scss']
})
export class ChallengeGeneratorComponent implements OnInit {

  @ViewChild(ChallengeViewComponent)
  private timerComponent: ChallengeViewComponent;

  challenge = {
    equation: '',
    result: 0
  };
  right = 0;
  wrong = 0;

  constructor() { }

  ngOnInit() {
    this.challenge = ChallengeGeneratorComponent.generateChallenge();
  }

  onCheckResult(input) {
    if(input.value == this.challenge.result) {
      this.challenge = ChallengeGeneratorComponent.generateChallenge();
      this.right++;
    } else {
      this.wrong++;
      this.timerComponent.error();
    }
    input.value = null;
  }

  onCheckResultMulti(value) {
    if(value == this.challenge.result) {
      this.challenge = ChallengeGeneratorComponent.generateChallenge();
      this.right++;
    } else {
      this.wrong++;
      this.timerComponent.error();
    }
  }

  static generateChallenge() : any {
    let a = Math.trunc(Math.random() * 10);
    let b = Math.trunc(Math.random() * 10);
    return {
      equation: a + ' + ' + b,
      result: a + b
    }
  }

}
