import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductApService {
  url = 'https://localhost:7124/v1/api/Products';

  constructor(private http: HttpClient) { }


  Create(product:Product){
    return this.http.post<Product>(this.url,product);
  }

  GetAll(){
    return this.http.get<Product[]>(this.url);
  }

  GetById(id:number){
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  Update(id:number,product:Product){
    return this.http.put<Product>(`${this.url}/${id}`,product);
  }

  Delete(id:number){
    return this.http.delete<Product>(`${this.url}/${id}`)
  }
}
