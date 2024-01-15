import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { StudentComponent } from './admin/student/student.component';

export const routes: Routes = [
    {
        path:"",
        component:ClientComponent
    },
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:"teacher",
                component:TeacherComponent
            },
            {
                path:"student",
                component:StudentComponent
            }
        ]
    },
    {
        path:'client',
        component:ClientComponent
    },
    {
        path:"**",
        component:NotFoundComponent
    },
];
