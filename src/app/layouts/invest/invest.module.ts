import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestRoutingModule } from './invest-routing.module';
import { AllInvestComponent } from './all-invest/all-invest.component';
import { AddInvestComponent } from './add-invest/add-invest.component';
import { MaterialModule } from 'src/app/classes/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllInvestComponent, AddInvestComponent],
  imports: [
    CommonModule,
    InvestRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvestModule { }
