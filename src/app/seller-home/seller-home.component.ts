import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  
  productList:undefined| Product[];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result)=>{
      this.productList = result;
    
    });
  }

}
