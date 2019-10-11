import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { MaterialModule } from '../classes/material';
import { WalletComponent } from './wallet/wallet.component';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { AddBasicWalletComponent } from './add-basic-wallet/add-basic-wallet.component';
import { AddGoalWalletComponent } from './add-goal-wallet/add-goal-wallet.component';
import { WalletsComponent } from './wallets/wallets.component';
import { RouterModule } from '@angular/router';
import { MainBoardRoutes } from '../main-board/main-board.routing';
import { TransactionModule } from '../layouts/transaction/transaction.module';



@NgModule({
  declarations: [IncomeComponent, WalletComponent, AddWalletComponent, AddBasicWalletComponent, AddGoalWalletComponent, WalletsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(MainBoardRoutes),
    TransactionModule
  ],
  exports: [
    IncomeComponent, WalletComponent, WalletsComponent
  ]
})
export class PersonalModule { }
