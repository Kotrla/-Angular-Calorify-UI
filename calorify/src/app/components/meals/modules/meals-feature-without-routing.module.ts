import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { MealsComponent } from '../meals.component';
import { MealsEffects } from '../ngrx/meals.effects';
import { MealComponent } from '../components/meal/meal.component';
import { mealsFeatureKey, mealsReducer } from '../ngrx/meals.reducer';
import { InputComponent } from '../../shared/ui/input/input.component';
import { SelectComponent } from '../../shared/ui/select/select.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MealItemComponent } from '../components/meal-item/meal-item.component';
import { AddMealModalComponent } from '../components/add-meal-modal/add-meal-modal.component';

@NgModule({
    declarations: [
        MealComponent,
        MealsComponent,
        MealItemComponent,
        AddMealModalComponent
    ],
    imports: [
        CommonModule,
        ButtonComponent,
        SelectComponent,
        InputComponent,
        ModalModule.forRoot(),
        EffectsModule.forFeature([MealsEffects]),
        StoreModule.forFeature(mealsFeatureKey, mealsReducer)
    ],
    providers: [BsModalRef, BsModalService]
})
export class MealsFeatureWithoutRoutingModule { }