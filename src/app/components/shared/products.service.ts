import { Injectable } from '@angular/core';

import { Product } from './product.model';

const productsArray = [
  new Product(1, 'Jacket1', 'Blue', 100, 'Outwear', true, 10),
  new Product(2, 'Jacket2', 'White', 300, 'Outwear', true, 3),
  new Product(3, 'Jacket3', 'Yellow', 200, 'Outwear', true, 21),
];

@Injectable()
export class ProductsService {

  shoppingList = [];
  constructor() { }

  getProducts(): Array<Product> {
    return productsArray;
  }

  getShoppingList(): Array<Product> {
    return this.shoppingList;
  }

  handleBuy(product): void {

    if (product.amount > 0) {
      product.amount--;
      const item = this.shoppingList.find(x => (x.id === product.id));
      if (item) {
        item.amount++;
        item.price += product.price;
      } else {
        const order: Product = Object.assign({}, product);
        order.amount = 1;
        this.shoppingList.push(order);
      }
    }

    if (!product.amount) {
      product.isAvaliable = false;
    }
  }

}
