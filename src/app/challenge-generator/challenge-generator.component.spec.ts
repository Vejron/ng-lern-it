import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeGeneratorComponent } from './challenge-generator.component';

describe('ChallengeGeneratorComponent', () => {
  let component: ChallengeGeneratorComponent;
  let fixture: ComponentFixture<ChallengeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
