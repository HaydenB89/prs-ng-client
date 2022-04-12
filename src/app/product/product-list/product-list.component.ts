import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchCriteria: string = "";

  constructor(
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe({
      next: (res) => {
        this.products = res;
        console.debug("Products", res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addVendorName(product: Product[]) {
    for(let p of product) {
      p.vendorName = p.vendor.name;
    }
  }

}
