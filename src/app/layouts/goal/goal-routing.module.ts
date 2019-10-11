import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllGoalComponent } from './all-goal/all-goal.component';


const routes: Routes = [
  {
    path: '', component: AllGoalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalRoutingModule { }
