import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'client'},
    {path:'client',component:ClientComponent},
    {path:'admin',component:AdminComponent},
    {path:'**',component:NotFoundComponent}
];
