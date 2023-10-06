import { TestBed } from '@angular/core/testing';

import { WorkoutsHttpService } from './workouts-http.service';

describe('WorkoutsHttpService', () => {
    let service: WorkoutsHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WorkoutsHttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
