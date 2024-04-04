import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path:"Home", component:HomeComponent},
    {path:"About", component:AboutUsComponent},
    {path:"**", component:NotFoundComponent},
];
