import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Request } from '../request.class';
import { Requestline } from 'src/app/requestline/requestline.class';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request!: Request;

  constructor(
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private rlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  review(): void {
    this.requestsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Request reviewed");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }
  edit(rl: Requestline): void {
    this.router.navigateByUrl(`/requestline/edit/${rl.id}`)
  }
  remove(rl: Requestline): void {
    this.rlsvc.remove(rl.id).subscribe({
      next: (res) => {
        console.debug("Requestline removed");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  refresh(): void{
    let id= this.route.snapshot.params['id'];
    this.requestsvc.get(+id).subscribe({
      next: (res) => {
        console.debug(res);
        this.request=res;
      }
    })
  }

  ngOnInit(): void{ 

    this.refresh();

  }

  
}
