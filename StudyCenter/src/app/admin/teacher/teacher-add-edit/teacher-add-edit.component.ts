import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SpecialityApiService } from '../../../Services/speciality-api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-teacher-add-edit',
  standalone: true,
  imports: [
    NzFormModule,
    NzDatePickerModule,
    NzTimePickerModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
  templateUrl: './teacher-add-edit.component.html',
  styleUrl: './teacher-add-edit.component.scss'
})
export class TeacherAddEditComponent implements OnInit{
  validateForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  id:number = 0;

  get IsEdit(){
    return this.id>0;
  }

  constructor(private fb: FormBuilder, private api:SpecialityApiService, private route:Router, private activeRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      
      if(this.id>0){
        this.api.GetSpeciality(this.id).subscribe((result) =>{
            this.validateForm.controls['name'].setValue(result.name);
            this.validateForm.controls['description'].setValue(result.description);
        });
      }
    });
  }


  submitForm(): void {
    if(this.id > 0){
      this.Edit();
    }
    else{
      this.Add();
    }
  }

  Edit(){
    if (this.validateForm.valid) {
      this.api.EditSpeciality(this.id,this.validateForm.value).subscribe((result) =>{
        if(result){
          this.route.navigate(['../../'],{relativeTo:this.activeRoute});
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  Add(){
    if (this.validateForm.valid) {
      this.api.AddSpeciality(this.validateForm.value).subscribe((result) =>{
        if(result){
          this.route.navigate(['../'],{relativeTo:this.activeRoute});
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  Clear(){
    this.validateForm.reset();
  }
}
