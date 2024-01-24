import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MealsEffects } from './meals.effects';

describe('MealsEffects', () => {
    let actions$: Observable<any>;
    let effects: MealsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MealsEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.inject(MealsEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
