import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGoalComponent } from './all-goal/all-goal.component';
import { GoalRoutingModule } from './goal-routing.module';
import { MaterialModule } from 'src/app/classes/material';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllGoalComponent, AddGoalComponent],
  imports: [
    CommonModule,
    GoalRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GoalModule { }
