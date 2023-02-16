import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  manuType:string="default";
  userName:string='';

  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.events.subscribe((value:any)=>{
      if(value.url){
        if(localStorage.getItem('seller') && value.url.includes('seller')){
            this.manuType="seller";
            console.warn('inside seller');
            let sellerStore = localStorage.getItem('seller');
            let sellerItem = sellerStore && JSON.parse(sellerStore)[0];
            this.userName = sellerItem.name;
        }else{
            this.manuType="default";
            console.warn('outside seller');
        }
      }
    });
  }
  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
