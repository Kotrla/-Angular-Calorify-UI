import { Component, Input } from '@angular/core';
import { IFood } from '../../ts/models/food.model';

@Component({
    selector: 'app-meal-item',
    templateUrl: './meal-item.component.html',
    styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent {
  @Input() food: IFood;
}
