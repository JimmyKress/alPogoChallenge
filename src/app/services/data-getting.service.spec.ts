import { TestBed } from '@angular/core/testing';

import { DataGettingService } from './data-getting.service';

describe('DataGettingService', () => {
  let service: DataGettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
