import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './reports-routing.module';
import { ReportComponent } from './reports.component';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
