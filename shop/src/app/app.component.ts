import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService, CartService]
})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService, private cartService: CartService){}

  @ViewChild(CartComponent) cart: CartComponent;

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  onBuy(productName){
    var productToAdd = this.products.find(function(product){
      return product.name == productName;
    });

    this.cartService.addProduct(productToAdd);

    console.info("Product bought: " + productName);

    this.cart.reloadProducts();
  };

  title = "Products";

  products: Array<Product>;
}
