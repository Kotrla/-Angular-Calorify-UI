import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutHistoryItemComponent } from './workout-history-item.component';

describe('WorkoutHistoryItemComponent', () => {
    let component: WorkoutHistoryItemComponent;
    let fixture: ComponentFixture<WorkoutHistoryItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WorkoutHistoryItemComponent]
        });
        fixture = TestBed.createComponent(WorkoutHistoryItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
