import { TestBed } from '@angular/core/testing';

import { TimelineDataSource } from './timeline-data-source.service';

describe('TimelineDataSourceService', () => {
  let service: TimelineDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
