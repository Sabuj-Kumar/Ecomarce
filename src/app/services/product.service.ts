import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productAdd(data:Product){
     return this.http.post('http://localhost:3000/products',data,{observe:'response'});
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products',);
  }
}
