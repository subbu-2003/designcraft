import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { Portfolio } from './portfolio/portfolio';
import { Ourteam } from './ourteam/ourteam';

export const routes: Routes = [
    {
        path:'', component:Home
    },
    {
        path:'service', component:Services
    },
    {
        path:'portfolio', component:Portfolio
    },
    {
        path:'ourteam', component:Ourteam
    }
];
