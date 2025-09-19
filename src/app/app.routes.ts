import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [

    
    {
        path:'', component:HomeComponent
    },
    {
        path:'service', component:ServicesComponent
    },
    {
        path:'team', component: OurteamComponent
    },
    {
        path:'portfolio', component: PortfolioComponent
    }
];
