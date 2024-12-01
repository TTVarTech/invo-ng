import { TestBed } from '@angular/core/testing';

import { MfinService } from './mfin.service';

describe('MfinService', () => {
  let service: MfinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
