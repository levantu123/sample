import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTransactionComponent } from 'src/app/layouts/transaction/add-transaction/add-transaction.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }
  openAddTransaction(){
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
