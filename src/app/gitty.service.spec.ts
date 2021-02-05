import { TestBed } from '@angular/core/testing';

import { GittyService } from './gitty.service';

describe('GittyService', () => {
  let service: GittyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GittyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
