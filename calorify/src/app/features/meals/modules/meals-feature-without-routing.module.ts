import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealsComponent } from '../meals.component';
import { MealsEffects } from '../ngrx/meals.effects';
import { MealComponent } from '../components/meal/meal.component';
import { mealsFeatureKey, mealsReducer } from '../ngrx/meals.reducer';
import { CardComponent } from '../../../shared/ui/card/card.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { SelectComponent } from '../../../shared/ui/select/select.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MealItemComponent } from '../components/meal-item/meal-item.component';
import { ListItemComponent } from '../../../shared/ui/list-item/list-item.component';
import { DailyMealsComponent } from '../components/daily-meals/daily-meals.component';
import { HistoryItemComponent } from '../components/history-item/history-item.component';
import { MealsHistoryComponent } from '../components/meals-history/meals-history.component';
import { AddMealModalComponent } from '../components/add-meal-modal/add-meal-modal.component';

@NgModule({
	declarations: [
		MealComponent,
		MealsComponent,
		MealItemComponent,
		DailyMealsComponent,
		HistoryItemComponent,
		MealsHistoryComponent,
		AddMealModalComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		CardComponent,
		InputComponent,
		ButtonComponent,
		SelectComponent,
		ListItemComponent,
		ModalModule.forRoot(),
		EffectsModule.forFeature([MealsEffects]),
		StoreModule.forFeature(mealsFeatureKey, mealsReducer),
	],
	providers: [BsModalRef, BsModalService],
})
export class MealsFeatureWithoutRoutingModule {}
