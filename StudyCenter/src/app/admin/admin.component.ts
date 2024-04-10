import { Component } from '@angular/core';
import { TeacherComponent } from './teacher/teacher.component';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TeacherComponent,
    RouterModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isCollapsed = false;
}