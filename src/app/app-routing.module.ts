import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: "",
    children: [
      {
				path: '',
				loadChildren: './main-board/main-board.module#MainBoardModule'
      },
      {
				path: 'user',
				loadChildren: './layouts/user/user.module#UserModule'
      },
      {
				path: 'goal',
				loadChildren: './layouts/goal/goal.module#GoalModule'
      },
      {
				path: 'invest',
				loadChildren: './layouts/invest/invest.module#InvestModule'
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
