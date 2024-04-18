import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApService } from '../Services/product-ap.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  
  id:number = 0;

  product?:Product;

  constructor(private avtiveRoute:ActivatedRoute, private apiService:ProductApService ){}

  ngOnInit(): void {
    this.avtiveRoute.params.subscribe(result =>{
      this.id = result['id'];

      console.log(this.id);
    })

    this.GetProduct()
  }

  GetProduct(){
    this.apiService.GetById(this.id).subscribe(result =>{
      this.product = result
    })
  }
}
