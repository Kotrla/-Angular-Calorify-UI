import { TestBed } from '@angular/core/testing';

import { WorkoutsNgrxService } from './workouts-ngrx.service';

describe('WorkoutsNgrxService', () => {
    let service: WorkoutsNgrxService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WorkoutsNgrxService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
