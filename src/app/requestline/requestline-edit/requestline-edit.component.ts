import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline!: Requestline;

  constructor(
    private rqlnsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.rqlnsvc.change(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline updated");
        this.router.navigateByUrl("/requestline/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.rqlnsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Requestline:", res);
        this.requestline = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
