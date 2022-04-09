import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private router : Router
  ) { }

  user: any = null; 

  get isLoggedIn() {
    return this.user != null;
  }

  chklogin() {
    if(!this.isLoggedIn) {
      this.router.navigateByUrl("/login");
    }
  }

  getUser() {
    return this.user; 
  }

  setUser(user: User) {
    this.user = user;
  }

  clear(): void {
    this.user = null;
  }
}
