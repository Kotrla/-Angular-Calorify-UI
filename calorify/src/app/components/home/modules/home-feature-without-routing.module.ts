import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';
import { homeFeatureKey, homeReducer } from '../ngrx/home.reducer';
import { DailySummaryComponent } from '../components/daily-summary/daily-summary.component';
import { WeeklySummaryComponent } from '../components/weekly-summary/weekly-summary.component';
import { HomeEffects } from '../ngrx/home.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        HomeComponent,
        DailySummaryComponent,
        WeeklySummaryComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([HomeEffects]),
        StoreModule.forFeature(homeFeatureKey, homeReducer)
    ]
})
export class HomeFeatureWithoutRoutingModule { }