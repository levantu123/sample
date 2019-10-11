import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private profileService: ProfileService) { }

  accounts : Array<any> = [];
  ngOnInit() {
    this.profileService.getUserProfile().subscribe((data:any)=>{
      this.accounts = data["accounts"]
    })
  }

}
