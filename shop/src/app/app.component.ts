import { Component, ViewChild } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cartService: CartService){}

  title = "Products";

  @ViewChild(CartComponent) cart: CartComponent;

  addToCart(product){
    this.cartService.addProduct(product);
    this.cart.reloadProducts();
    console.info("Added to cart");
  }
}
