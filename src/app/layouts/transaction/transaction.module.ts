import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { MaterialModule } from 'src/app/classes/material';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';



@NgModule({
  declarations: [TransactionsComponent, AddTransactionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TransactionsComponent]
})
export class TransactionModule { }
