import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private router : Router
  ) { }

  user: any = null; 

  chklogin() {
    if(this.user==null) {
      this.router.navigateByUrl("") //something here
    }

  }



}
