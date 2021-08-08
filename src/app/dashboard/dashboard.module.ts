import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewAlertComponent } from './alerts/new-alert/new-alert.component';
import { CalendarComponent } from './calendar/calendar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListAlertsComponent } from './alerts/list-alerts/list-alerts.component';
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { AlertComponent } from './alerts/alert/alert.component';
import { ViewContractComponent } from './view-contract/view-contract.component';
import {ManagementModule} from "../management/management.module";


@NgModule({
  declarations: [
    DashboardComponent,
    NewAlertComponent,
    CalendarComponent,
    ListAlertsComponent,
    AlertComponent,
    ViewContractComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    ManagementModule
  ]
})
export class DashboardModule { }
