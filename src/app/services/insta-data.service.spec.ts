import { TestBed } from '@angular/core/testing';

import { InstaDataService } from './insta-data.service';

describe('InstaDataService', () => {
  let service: InstaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
