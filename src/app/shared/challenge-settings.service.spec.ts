import { TestBed, inject } from '@angular/core/testing';

import { ChallengeSettingsService } from './challenge-settings.service';

describe('ChallengeSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallengeSettingsService]
    });
  });

  it('should ...', inject([ChallengeSettingsService], (service: ChallengeSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
