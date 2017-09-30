import { Component, OnInit, Output, EventEmitter, Optional } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ProductsService } from './products.service';
import { Product } from './product'
import { ConfigOptionsService } from '../services/config-options.service';

@Component({
  selector: 'app-products',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;
  today: null;
  
  constructor(
  private productsService: ProductsService,
  @Optional() private configService: ConfigOptionsService) { }

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.today = this.configService ? this.configService.getConfig("date") : "";
  }

  addProductToCart(product){
    this.addToCart.emit(product);
  };
}
