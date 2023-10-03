import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../ts/models/user.model';
import { IUserTargets } from '../../ts/models/targets.model';
import { IUserNeeds } from '../../ts/models/user-needs.model';

@Component({
    selector: 'app-daily-summary',
    templateUrl: './daily-summary.component.html',
    styleUrls: [ './daily-summary.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailySummaryComponent implements OnChanges {

  @Input() userDetails: IUser | null;
  @Input() userDaily: IUserTargets | null;

  userTargets: IUserNeeds;

  constructor(

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['userDetails']?.currentValue !== changes['userDetails']?.previousValue) {
          this.userTargets = this.userDetails?.needs as IUserNeeds;
      }
  }
}
