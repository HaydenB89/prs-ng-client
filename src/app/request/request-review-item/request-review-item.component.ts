import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestline } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

 request!: Request;
 verifyBtn: boolean = false;
    
  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug(res);
        this.refresh();
      },
      error: (err) => console.error(err) 
    });
  }
  
  edit(reqline: Requestline): void {
    this.router.navigateByUrl(`/requestlines/edit/${reqline.id}`);
  }

  remove(reqline: Requestline): void {
    this.reqsvc.remove(reqline.id).subscribe({
      next: (res) => {
        console.debug(res);
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  approve(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.debug("Request approved.");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  reject(): void {
    this.verifyBtn = !this.verifyBtn;
  }
  verifyReject(): void {
    this.verifyBtn = false;
    this.reqsvc.reject(this.request).subscribe({
      next: (res) => {
        console.debug(res);
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {

    this.refresh();
    
  }

}
