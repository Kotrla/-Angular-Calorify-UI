import { IHistoryMeal } from '../../ts/meals.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-history-item',
	templateUrl: './history-item.component.html',
	styleUrls: ['./history-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryItemComponent {
	@Input() historyMeal: IHistoryMeal;

	isExpanded: boolean;

	onToggleExpanded(isExpanded: boolean): void {
		this.isExpanded = isExpanded;
	}
}
