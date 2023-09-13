import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        ButtonComponent
    ]
})
export class DashboardFeatureWithoutRoutingModule { }