import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DetailsComponent } from './Pages/details/details.component';
import { RegisterComponent } from './Pages/register/register.component';
import { log } from 'console';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"Details/:title", component:DetailsComponent},
    {path:"about", component:AboutUsComponent},
    {path:"**", component:NotFoundComponent},
];
