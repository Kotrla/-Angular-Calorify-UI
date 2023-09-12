import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input() showLabel = true;
  @Input() inputLabel = '';
	@Input() inputType = 'text';
  @Input() inputWidth: string;
	@Input() inputPlaceholder = '';
  @Input() passedFormControl: AbstractControl;
  
  constructor() { }
}
