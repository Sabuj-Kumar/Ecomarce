import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  isLogIn = true;  
  constructor(private seller:SellerService,private router:Router){}
  ngOnInit(): void {
   // this.seller.reloadSeller();
  }
  signUp(data:SignUp):void{
      this.seller.userSignUp(data);
  }
  logIN(data:SignUp):void{
    console.warn(data);
  }
  isLogin(){
    this.isLogIn = true;
    console.warn("isLogin");
  }
  isSignUp(){
    console.warn("isSingUp");
    this.isLogIn = false;
  }
}
