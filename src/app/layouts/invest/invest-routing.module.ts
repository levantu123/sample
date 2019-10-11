import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInvestComponent } from './all-invest/all-invest.component';


const routes: Routes = [
  {path: '', component: AllInvestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestRoutingModule { }
