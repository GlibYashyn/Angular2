import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable()
export class CartService {

  private products: Product[];

  constructor() {
    this.products = new Array<Product>();
   }

  getProducts(): Product[]{
    return this.products;
  }

  getCount(): number {
    return this.products.length;
  }

  getTotal(): number {
    return this.products.map(p => p.price).reduce((a, b) => a + b, 0);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(product: Product): void {
    var index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
