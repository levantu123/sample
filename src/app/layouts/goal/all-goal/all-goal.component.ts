import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddGoalComponent } from '../add-goal/add-goal.component';
import { GoalService } from 'src/app/service/goal.service';

@Component({
  selector: 'app-all-goal',
  templateUrl: './all-goal.component.html',
  styleUrls: ['./all-goal.component.scss']
})
export class AllGoalComponent implements OnInit {

  constructor(public dialog: MatDialog, private goalService: GoalService) { }

  goals: Array<any> = [];
  ngOnInit() {
    this.goalService.getAllGoal().subscribe(data=>{
      this.goals =  data['_embedded']['goals'];
    });
  }
  openAddGoalDialog(): void {
    const dialogRef = this.dialog.open(AddGoalComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.goalService.createGoal(result).subscribe((data)=>{
        this.goals.push(data)
      });
    });
  }

}
