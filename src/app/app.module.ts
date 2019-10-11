import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBoardModule } from './main-board/main-board.module';
import { UserModule } from './layouts/user/user.module';
import { GoalModule } from './layouts/goal/goal.module';
import { InvestModule } from './layouts/invest/invest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainBoardModule,
    UserModule,
    GoalModule,
    InvestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
