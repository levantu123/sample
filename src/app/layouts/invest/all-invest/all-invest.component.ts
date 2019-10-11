import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InvestService } from 'src/app/service/invest.service';
import { AddInvestComponent } from '../add-invest/add-invest.component';

@Component({
  selector: 'app-all-invest',
  templateUrl: './all-invest.component.html',
  styleUrls: ['./all-invest.component.scss']
})
export class AllInvestComponent implements OnInit {

  constructor(public dialog: MatDialog, private investService: InvestService) { }

  invests: Array<any> = []
  ngOnInit() {
    this.investService.getAllInvest().subscribe(data=>{
      this.invests = data['_embedded']['invests']
    })
  }
  openAddinvestDialog(): void {
    const dialogRef = this.dialog.open(AddInvestComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.investService.createInvest(result).subscribe((data)=>{
        this.invests.push(data)
      });
    });
  }

}
