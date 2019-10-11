import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-invest',
  templateUrl: './add-invest.component.html',
  styleUrls: ['./add-invest.component.scss']
})
export class AddInvestComponent {

  constructor(public dialogRef: MatDialogRef<AddInvestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  invest: any = {
    name: "",
    limitAmount: 0,
    issuedPerious: 0,
    profitRate: 0,
    owner: localStorage.getItem('customerId')
  }
}
