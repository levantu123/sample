import { Component } from '@angular/core';
import { AuthenService } from './service/authen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iwallet';
  constructor(private authen: AuthenService){
    authen.grantToken();
  }
}
