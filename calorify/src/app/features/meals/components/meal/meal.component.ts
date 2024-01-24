import { IMeal } from '../../ts/meals.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AddMealModalComponent } from '../add-meal-modal/add-meal-modal.component';

@Component({
	selector: 'app-meal',
	templateUrl: './meal.component.html',
	styleUrls: ['./meal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealComponent {
	@Input() mealName: string;
	@Input() meals: IMeal | null;

	modalRef: BsModalRef;

	constructor(private modalService: BsModalService) {}

	onOpenAddModal(): void {
		const initialState = { mealName: this.mealName };

		this.modalRef = this.modalService.show(AddMealModalComponent, { initialState, backdrop: 'static' });
	}
}
