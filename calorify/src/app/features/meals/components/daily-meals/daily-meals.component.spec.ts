import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMealsComponent } from './daily-meals.component';

describe('DailyMealsComponent', () => {
  let component: DailyMealsComponent;
  let fixture: ComponentFixture<DailyMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyMealsComponent]
    });
    fixture = TestBed.createComponent(DailyMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
