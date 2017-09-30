import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from "./cart.component";
import { CartService } from "./cart.service";
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderedByPipe } from './ordered-by.pipe';

@NgModule({
  imports: [BrowserModule],
  providers: [CartService],
  bootstrap: [CartComponent],
  declarations: [CartComponent, CartItemComponent, OrderedByPipe],
  exports: [CartComponent]
})
export class CartModule { }
