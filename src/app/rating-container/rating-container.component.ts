import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating-container',
  templateUrl: './rating-container.component.html',
  styleUrls: ['./rating-container.component.scss']
})
export class RatingContainerComponent implements OnInit {
  /*@Input('right') set right(value : number) {
    let rating = value - this.wrong;
    this.updateRating(rating);
    //this.stars[this.index++].visible = true;
  };
  @Input('wrong') set wrong(value : number) {
    let rating = this.right - value;
    this.updateRating(rating);
  };*/

  @Input() right;
  @Input() wrong;

  //private rating = 0;
  private stars = [];

  constructor() {
    for (var i = 0; i < 10; i++) {
      this.stars.push({visible: false});
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changeRecord) {
    let rating = Math.max(this.right - this.wrong, 0);
    this.updateRating(rating);
  }

  private updateRating(rating: number) {
    /*this.stars = this.stars.map((star, index) => {
      return {visible: (rating >= index)};
    });*/
    this.stars.forEach((star, index) => {
      star.visible = (rating > index);
    });
  }
}
