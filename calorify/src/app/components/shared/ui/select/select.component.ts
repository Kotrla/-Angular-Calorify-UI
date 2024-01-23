import { CommonModule } from '@angular/common';
import { ISelectData } from '../../../../ts/app.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-select',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
	@Input() selectName: string;
	@Input() selectLabel: string;
	@Input() selectWidth: string;
	@Input() bottomSpace: boolean;
	@Input() selectData: ISelectData[] | null;
	@Input() passedFormControl: AbstractControl | FormControl | null;
}
