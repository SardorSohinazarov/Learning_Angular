import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent  {
  productForm !: FormGroup
  product!:Product

  constructor(
    private formBuilder : FormBuilder
  ){}

  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', '')),
  });

  ngOnInit():void{
    this.productForm = this.formBuilder.group({
      
    })
  }
}

export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}
