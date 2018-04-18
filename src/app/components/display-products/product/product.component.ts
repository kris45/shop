import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Product } from '../../shared/product.model';
import {ProductsService} from '../../shared/products.service';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()  product: Product;
  @Output() handleBuyButton = new EventEmitter();

  constructor(
    public productsService: ProductsService
  ) { }

  handleBuy() {
    this.handleBuyButton.emit(this.product);
  }
}
