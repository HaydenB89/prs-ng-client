import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();

  constructor(
    private rqlnsvc: RequestlineService,
    private router: Router
  ) { }

  save(): void {
    this.rqlnsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline Added");
        this.router.navigateByUrl("requestline/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
