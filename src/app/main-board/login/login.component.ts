import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authen: AuthenService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.authen.authen(this.route.snapshot.queryParamMap.get("code"));
  }

}
