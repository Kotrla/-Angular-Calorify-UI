import { TestBed } from '@angular/core/testing';

import { HomeNgrxService } from './home-ngrx.service';

describe('HomeNgrxService', () => {
    let service: HomeNgrxService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HomeNgrxService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
