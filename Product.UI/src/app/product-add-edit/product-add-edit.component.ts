import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApService } from '../Services/product-ap.service';

@Component({
  selector: 'app-product-add-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './product-add-edit.component.html',
  styleUrl: './product-add-edit.component.scss'
})
export class ProductAddEditComponent implements OnInit {
  form1:FormGroup = this.formBuilder.group({
    name:[''],
    description:['']
  })


  id:number = 0;

  
  get Updating(){
    return this.id>0; 
  }

  constructor(private formBuilder:FormBuilder, private route:ActivatedRoute, private apiService:ProductApService,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe(params =>
      {
        this.id = params['id']

        console.log(this.id)
      }
    )

    this.GetById()
  }

  Submit(){
    if(this.Updating){
      this.Update()
    }else{
      this.Add()
    }
  }

  GetById(){
    this.apiService.GetById(this.id).subscribe(result =>{
      console.log(result)

      this.form1.controls['name'].setValue(result.name)
      this.form1.controls['description'].setValue(result.name)
    })
  }

  Add(){
    this.apiService.Create(this.form1.value).subscribe(result =>{
      console.log(result)
    })
  }

  Update(){
    this.apiService.Update(this.id,this.form1.value).subscribe(result =>{
      if(result){
        // this.router.navigate();
      }
    })
  }
}
