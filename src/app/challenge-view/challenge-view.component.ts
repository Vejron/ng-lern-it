import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-view',
  templateUrl: './challenge-view.component.html',
  styleUrls: ['./challenge-view.component.scss']
})
export class ChallengeViewComponent implements OnInit, OnChanges {
  @Input() challenge;

  shake = '';
  flipped = false;
  rotation = 0;
  frontChallenge = '';
  backChallenge = '';

  constructor() { }

  ngOnInit() {
    //this.frontChallenge = this.challenge.equation;
  }

  ngOnChanges(changeRecord) {
    console.log(changeRecord);
    if(changeRecord.challenge) {
      this.flipp();
    }
  }

  error() {
    this.shake = 'shake';
    setTimeout(() => this.shake = '', 800);
  }

  flipp() {
    this.flipped = !this.flipped;
    this.rotation += 180;

    if(!this.flipped) {
      this.frontChallenge = this.challenge.equation;
    } else {
      this.backChallenge = this.challenge.equation;
    }
  }
}
