import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-list-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
	@Input() isExpanded: boolean;
	@Input() isShowExpanded: boolean;
	@Output() toggleExpandedEvent: EventEmitter<boolean> = new EventEmitter();

	onToggleExpanded(): void {
		this.toggleExpandedEvent.next(!this.isExpanded);
	}
}
