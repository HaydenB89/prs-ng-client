import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = "";

  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        this.users = res;
        console.debug("Users", res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
