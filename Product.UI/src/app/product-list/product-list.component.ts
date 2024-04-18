import { Component, OnInit } from '@angular/core';
import { ProductApService } from '../Services/product-ap.service';
import { Product } from '../product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  constructor(private api:ProductApService){}

  ngOnInit(): void {
    this.api.GetAll().subscribe(result =>{
      this.listOfData = result
    })
  }

  Delete(id:number){
    this.api.Delete(id).subscribe(x => 
      console.log(x)
    )
  }

  listOfData: Product[] = [];
}