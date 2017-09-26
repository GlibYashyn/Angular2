import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService) {
    this.products = new Array<Product>();
   }

  products: Product[];

  reloadProducts(): void {
    this.products = this.cartService.getProducts();
  }

  removeProduct(product: Product): void {
    this.cartService.removeProduct(product);
  }
}
