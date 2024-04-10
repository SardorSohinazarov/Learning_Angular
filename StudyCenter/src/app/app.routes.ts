import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { TeacherListComponent } from './admin/teacher/teacher-list/teacher-list.component';
import { TeacherAddEditComponent } from './admin/teacher/teacher-add-edit/teacher-add-edit.component';

export const routes: Routes = [
    {path:'',redirectTo:'client',pathMatch:'full'},
    {path:'client',component:ClientComponent},
    {path:'admin',component:AdminComponent,
        // loadChildren:()=>
        //     import('./admin/teacher/teacher.component').then(c => c.TeacherComponent)
        children:[
            {path:'teacher',component:TeacherComponent,
                children:[
                    {path:'',component:TeacherListComponent},
                    {path:'add',component:TeacherAddEditComponent},
                    {path:'edit/:id',component:TeacherAddEditComponent}
                ]
            }
        ]
    },
    {path:'**',component:NotFoundComponent}
];
