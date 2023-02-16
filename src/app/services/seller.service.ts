import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignIn, SignUp } from '../data-type';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogin = new BehaviorSubject<boolean>(false); 
  isError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient,private router:Router) { }

  userSignUp(data:SignUp){
    this.http.post<SignUp>('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result) =>{
      this.isSellerLogin.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    });
  }
  reloadSeller(){
      if(localStorage.getItem('seller')){
        this.isSellerLogin.next(true);
        this.router.navigate(['seller-home']);
      }
  }
  userSignIn(data:SignIn){
  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      console.warn(result.body);
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        console.warn("log in succesfull");
      }else{
        this.isError.emit(true);
        console.warn("log in failed");
      }
    })
  }
}
