import { Component } from '@angular/core';
import { MatBottomSheetRef, MatDialog } from '@angular/material';
import { AddGoalWalletComponent } from '../add-goal-wallet/add-goal-wallet.component';
import { AddBasicWalletComponent } from '../add-basic-wallet/add-basic-wallet.component';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<AddWalletComponent>, public dialog: MatDialog) { }
  openAddGoal(): void {
    const dialogRef = this.dialog.open(AddGoalWalletComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openAddBasic(): void {
    const dialogRef = this.dialog.open(AddBasicWalletComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
