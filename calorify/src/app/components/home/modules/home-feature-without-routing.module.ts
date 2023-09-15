import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';
import { DailySummaryComponent } from '../components/daily-summary/daily-summary.component';
import { WeeklySummaryComponent } from '../components/weekly-summary/weekly-summary.component';

@NgModule({
    declarations: [
        HomeComponent,
        DailySummaryComponent,
        WeeklySummaryComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeFeatureWithoutRoutingModule { }