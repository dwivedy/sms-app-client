import { TestBed } from '@angular/core/testing';

import { SmsDataService } from './sms-data.service';

describe('SmsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmsDataService = TestBed.get(SmsDataService);
    expect(service).toBeTruthy();
  });
});
