import { Component, OnInit } from '@angular/core';
import { AddWalletComponent } from '../add-wallet/add-wallet.component';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) { }
  openBottomSheet(): void {
    this._bottomSheet.open(AddWalletComponent);
  }

  wallets: Array<any> = [
    {
      id: "id",
      name: "Cash",
      type: "type",
      goalValue: 0,
      startAmount: 0,
      currentAmount: 1000,
      endDate: null
    },
    {
      id: "id",
      name: "Saving",
      type: "type",
      goalValue: 0,
      startAmount: 0,
      currentAmount: 1200,
      endDate: null
    },
    {
      id: "id",
      name: "Travel",
      type: "type",
      goalValue: 0,
      startAmount: 0,
      currentAmount: 500,
      endDate: null
    },
    {
      id: "id",
      name: "Buy new House",
      type: "type",
      goalValue: 0,
      startAmount: 0,
      currentAmount: 1400,
      endDate: null
    }
  ]

  ngOnInit() {
  }

}
