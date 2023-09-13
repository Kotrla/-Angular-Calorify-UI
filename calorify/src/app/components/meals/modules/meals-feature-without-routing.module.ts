import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from '../meals.component';

@NgModule({
    declarations: [
        MealsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MealsFeatureWithoutRoutingModule { }