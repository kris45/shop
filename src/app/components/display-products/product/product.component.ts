import {Component, Input, OnInit} from '@angular/core';

import { Product } from './../models/product.model';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()  product: Product;
  constructor() { }
  //
  // ngOnInit() {
  // }

  handleBuy(): void {
    console.log('buy', this.product.name);
    if (this.product.amount > 0) {
      this.product.amount--;
    }
  }
}
