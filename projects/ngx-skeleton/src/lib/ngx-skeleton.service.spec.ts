import { TestBed } from '@angular/core/testing';

import { NgxSkeletonService } from './ngx-skeleton.service';

describe('NgxSkeletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSkeletonService = TestBed.get(NgxSkeletonService);
    expect(service).toBeTruthy();
  });
});
