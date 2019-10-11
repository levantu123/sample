import { Routes } from "@angular/router";
import { MainBoardComponent } from './main-board.component';
import { WalletComponent } from '../personal/wallet/wallet.component';
import { LoginComponent } from './login/login.component';

export const MainBoardRoutes: Routes = [
    {
        path: "", component: MainBoardComponent
    },
    {
        path: "wallets/:walletId", component: WalletComponent 
    },
    {
        path: "login", component: LoginComponent 
    }
];
