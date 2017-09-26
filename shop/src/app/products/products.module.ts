import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './productList.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ProductListComponent, ProductItemComponent],
  bootstrap: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductsModule { }
