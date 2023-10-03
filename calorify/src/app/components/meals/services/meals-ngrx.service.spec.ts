import { TestBed } from '@angular/core/testing';

import { MealsNgrxService } from './meals-ngrx.service';

describe('MealsNgrxService', () => {
    let service: MealsNgrxService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MealsNgrxService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
