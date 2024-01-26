import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsHistoryComponent } from './meals-history.component';

describe('MealsHistoryComponent', () => {
  let component: MealsHistoryComponent;
  let fixture: ComponentFixture<MealsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsHistoryComponent]
    });
    fixture = TestBed.createComponent(MealsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
