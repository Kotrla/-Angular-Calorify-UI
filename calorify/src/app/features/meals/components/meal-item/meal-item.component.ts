import { IFood } from '../../ts/meals.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-meal-item',
	templateUrl: './meal-item.component.html',
	styleUrls: ['./meal-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealItemComponent {
	@Input() food: IFood;
}
