import { Injectable } from '@angular/core';

import { Product } from './../models/product.model';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product('Jacket1', 'Blue', 100, 'Outwear', true, 10),
      new Product('Jacket2', 'White', 300, 'Outwear', true, 3),
      new Product('Jacket3', 'Yellow', 200, 'Outwear', false, 21),
    ];
  }

}
