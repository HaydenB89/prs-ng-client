import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline!: Requestline;
  products!: Product[];

  constructor(
    private rqlnsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ) { }

  save(): void {
    this.rqlnsvc.change(this.requestline).subscribe({
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
    this.productsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
      }
    })
  }

}
