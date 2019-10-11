import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private profileService: ProfileService) { }


  ngOnInit() {
    this.profileService.getUserDetailedProfileInfor().subscribe((data: any)=>{
      this.userDetail = data;
    })
    this.profileService.getUserProfile().subscribe((data: any)=>{
      this.accounts = data["accounts"]
    })
  }
  accounts : Array<any>;
  userDetail: any;

}
