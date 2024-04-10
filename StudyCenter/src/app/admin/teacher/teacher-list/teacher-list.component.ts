import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { NzScrollToOptions } from 'ng-zorro-antd/core/services';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { NzBreadcrumb } from 'ng-zorro-antd/breadcrumb/breadcrumb';
import { SpecialityApiService } from '../../../Services/speciality-api.service';
import { Speciality } from '../../../speciality';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    RouterLink,
    NzButtonModule
  ],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent implements OnInit {
  specialities:Speciality[] = [];

  constructor(private specialityApiService:SpecialityApiService){}

  ngOnInit(): void {
    this.specialityApiService.GetAllSpeciality()
    .subscribe((result) =>{
      console.log(result)
      this.specialities = result;
    })
  }

  getAllServices(){
    this.specialityApiService.GetAllSpeciality()
    .subscribe((result) =>{
      console.log(result)
      this.specialities = result;
    })
  }

  DeleteSpeciality(id:number){
    this.specialityApiService.DeleteSpeciality(id)
    .subscribe((result) =>{
      if(result){
        this.getAllServices();
      }
    })
  }
}

