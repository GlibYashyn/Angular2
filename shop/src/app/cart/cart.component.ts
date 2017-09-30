import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../products/product';
import { OrderedByPipe } from './ordered-by.pipe';

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
  total: number;

  reloadProducts(): void {
    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }
    this.products = this.cartService.getProducts().filter(onlyUnique);
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.cartService.getTotal();
  }

  removeProduct(product: Product): void {
    this.reloadProducts();
  }

  clearCart(): void {
    this.cartService.clear();
    this.reloadProducts();
  }
}
