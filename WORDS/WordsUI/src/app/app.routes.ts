import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"details/:word",
        component:DetailsComponent
    }
];
