import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingList: Array<Product>;

  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.shoppingList = this.productsService.getShoppingList();
  }

}
