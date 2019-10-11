import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-goal-wallet',
  templateUrl: './add-goal-wallet.component.html',
  styleUrls: ['./add-goal-wallet.component.scss']
})
export class AddGoalWalletComponent {

  constructor(public dialogRef: MatDialogRef<AddGoalWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
