import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeMultiInputComponent } from './challenge-multi-input.component';

describe('ChallengeMultiInputComponent', () => {
  let component: ChallengeMultiInputComponent;
  let fixture: ComponentFixture<ChallengeMultiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeMultiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeMultiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
