import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp } from '../data-type';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogin = new BehaviorSubject<boolean>(false); 
  constructor(private http: HttpClient,private router:Router) { }

  userSignUp(data:SignUp){
    this.http.post<SignUp>('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result) =>{
      this.isSellerLogin.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      //this.router.navigate(['seller-home']);
    });
  }
  reloadSeller(){
      if(localStorage.getItem('seller')){
        this.isSellerLogin.next(true);
        //this.router.navigate(['seller-home']);
      }
  }
}
