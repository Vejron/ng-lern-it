import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingContainerComponent } from './rating-container.component';

describe('RatingContainerComponent', () => {
  let component: RatingContainerComponent;
  let fixture: ComponentFixture<RatingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
