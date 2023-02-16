import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignIn, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  isLogIn = true;  
  logInError:string = "";
  constructor(private seller:SellerService,private router:Router){}
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data:SignUp):void{
      this.seller.userSignUp(data);
  }
  logIn(data:SignIn):void{
    this.logInError = "";
    this.seller.userSignIn(data);
    this.seller.isError.subscribe((isError)=>{
      this.logInError = "Email or Password not valid";
    });
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
