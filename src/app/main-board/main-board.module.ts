import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoardComponent } from './main-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MainBoardRoutes } from './main-board.routing';
import { MaterialModule } from '../classes/material';
import { PersonalModule } from '../personal/personal.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainBoardComponent, NavbarComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MainBoardRoutes),
    MaterialModule,
    PersonalModule,
    HttpClientModule
  ],
  exports: [NavbarComponent, FooterComponent, LoginComponent]
})
export class MainBoardModule { }
