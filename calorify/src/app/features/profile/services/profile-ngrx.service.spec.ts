import { TestBed } from '@angular/core/testing';

import { ProfileNgrxService } from './profile-ngrx.service';

describe('ProfileNgrxService', () => {
  let service: ProfileNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
