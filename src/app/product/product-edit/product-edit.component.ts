import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  vendors!: Vendor[];

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendsvc: VendorService
  ) { }

  save(): void {
    this.productsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product updated");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.productsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vendors = res;
      }
    })
  }

}
