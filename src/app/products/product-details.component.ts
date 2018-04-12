import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Details';
  errorMessage: string;
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router,  private _productService: ProductService) {}

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
        const id = +param;
        this.getProduct(id);
    }
    // +  is a javascript shortcut to convert string to numeric data
    // id = +this._route.snapshot.paramMap.get('id');
    // this.pageTitle += `: ${id}`;
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }

}
