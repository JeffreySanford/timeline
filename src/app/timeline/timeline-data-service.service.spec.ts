import { TestBed } from '@angular/core/testing';

import { TimelineDataServiceService } from './timeline-data-service.service';

describe('TimelineDataServiceService', () => {
  let service: TimelineDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
