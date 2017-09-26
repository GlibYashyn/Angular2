import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product'

@Component({
  selector: 'app-products',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
constructor(private productsService: ProductsService){}

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addProductToCart(product){
    this.addToCart.emit(product);
  };

  products: Array<Product>;
}
