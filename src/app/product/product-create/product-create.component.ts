import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors!: Vendor[];

  constructor(
    private productsvc: ProductService,
    private router: Router,
    private vendsvc: VendorService
  ) { }

  save(): void {
    this.productsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product Added");
        this.router.navigateByUrl("product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vendors = res;
      }
    })
  }

}
