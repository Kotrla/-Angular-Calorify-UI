import { TestBed } from '@angular/core/testing';

import { WorkoutsFormService } from './workouts-form.service';

describe('WorkoutsFormService', () => {
    let service: WorkoutsFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WorkoutsFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
