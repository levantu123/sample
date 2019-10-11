import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-basic-wallet',
  templateUrl: './add-basic-wallet.component.html',
  styleUrls: ['./add-basic-wallet.component.scss']
})
export class AddBasicWalletComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBasicWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
