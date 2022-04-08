import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  showVerifyButton: boolean = false;

  constructor(
    private productsvc : ProductService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.showVerifyButton = false;
    this.productsvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Product Deleted!");
        this.router.navigateByUrl("product/list");
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
    })
  }

}
