import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  product!: Product[]

  constructor(

    private rqlnsvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private systemsvc: SystemService

  ) { }

  save(): void {
    this.rqlnsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  
    this.requestline.requestId = this.route.snapshot.params["rid"];
    this.productsvc.list().subscribe({
      next: (res) =>  {
        console.debug("Products:", res);
        this.product = res;
      },
      error: (err) => console.error(err)
      
    });
    this.productsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
      }
    });

  }

}
