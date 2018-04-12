import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsService } from './components/display-products/services/products.service';
import { ProductListComponent } from './components/display-products/product-list/product-list.component';
import { ProductComponent } from './components/display-products/product/product.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

