import { TestBed } from '@angular/core/testing';

import { MealsHttpService } from './meals-http.service';

describe('MealsHttpService', () => {
    let service: MealsHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MealsHttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
