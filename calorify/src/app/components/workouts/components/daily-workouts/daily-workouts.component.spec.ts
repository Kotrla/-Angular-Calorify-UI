import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWorkoutsComponent } from './daily-workouts.component';

describe('DailyWorkoutsComponent', () => {
    let component: DailyWorkoutsComponent;
    let fixture: ComponentFixture<DailyWorkoutsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DailyWorkoutsComponent]
        });
        fixture = TestBed.createComponent(DailyWorkoutsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
