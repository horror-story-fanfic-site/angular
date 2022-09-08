import { TestBed } from '@angular/core/testing';

import { ReserpasswordService } from './reserpassword.service';

describe('ReserpasswordService', () => {
  let service: ReserpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
