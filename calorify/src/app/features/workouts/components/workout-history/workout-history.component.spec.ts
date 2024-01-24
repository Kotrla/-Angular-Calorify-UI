import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutHistoryComponent } from './workout-history.component';

describe('WorkoutHistoryComponent', () => {
    let component: WorkoutHistoryComponent;
    let fixture: ComponentFixture<WorkoutHistoryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WorkoutHistoryComponent]
        });
        fixture = TestBed.createComponent(WorkoutHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
