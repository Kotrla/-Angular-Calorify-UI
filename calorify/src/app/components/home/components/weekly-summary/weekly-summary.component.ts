import { Component, Input } from '@angular/core';
import { IUserTargets } from '../../ts/models/targets.model';

@Component({
    selector: 'app-weekly-summary',
    templateUrl: './weekly-summary.component.html',
    styleUrls: ['./weekly-summary.component.scss']
})
export class WeeklySummaryComponent {

  @Input() userTargets: IUserTargets[] | null;

  constructor() { }
}
