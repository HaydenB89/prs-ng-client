import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login: string = "";
  password: string = "";

  constructor(
    private usersvc: UserService,
    private router : Router
  ) { }

  submit(): void {
    this.usersvc.login(this.login, this.password).subscribe({
      next: (res) => {
        console.log("Logged-in. Good job!");
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.error("Oh no! You messed up logging in!");
      }
    });
  }

  ngOnInit(): void {
  }

}
