import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  invld: string = "";

  constructor(
    private systemsvc: SystemService,
    private usersvc: UserService,
    private router : Router
  ) { }

  login(): void {
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log("Logged-in. Good job!");
        this.systemsvc.setUser(res);
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        if(err.status == 404){
          this.invld = "Invalid username or password!"
        } else {
        console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}


