import { CommonModule } from '@angular/common';
import { ISelectData } from 'src/app/ts/models/select-data.model';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  
	@Input() selectName: string;
  @Input() selectLabel: string;
  @Input() selectWidth: string;
  @Input() bottomSpace: boolean;
 	@Input() selectData: ISelectData[] | null;
  @Input() passedFormControl: AbstractControl;
  

}
