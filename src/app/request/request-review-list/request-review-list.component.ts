import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  constructor(
    private systemsvc: SystemService,
    private reqsvc: RequestService
  ) { }

  requests!: Request[];

  addUserUsername(requests: Request[]) {
    for(let r of requests) {
      r.userUsername = r.userUsername;
    }
  }

  ngOnInit(): void {
    this.systemsvc.chklogin();
    let userId = this.systemsvc.getUser()!.id;
    this.reqsvc.reviewlst(userId).subscribe({
      next: (res) => {
        this.addUserUsername(res);
        console.debug(res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    });
  }

}
