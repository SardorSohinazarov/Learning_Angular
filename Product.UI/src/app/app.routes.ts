import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent,
        children:[
            {path:"products", component:ProductListComponent},
            {path:"products/update/:id",component:ProductAddEditComponent},
            {path:'products/add',component:ProductAddEditComponent},
            {path:"products/:id", component:ProductDetailsComponent},
        ]
    }
];
