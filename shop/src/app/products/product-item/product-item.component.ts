import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TitleCasePipe, CurrencyPipe } from '@angular/common';
import { Product } from "../product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  btnText: string = "Buy";
  btnCls: string = "btn btn-success btn-buy";

  private emited: boolean = false;

  constructor() { }

  onBuy(): void {
    if (this.emited) {
      return;
    }
    this.addToCart.emit(this.product);
    this.emited = true;
    this.btnText = "Added to cart";
    this.btnCls = "btn btn-info btn-buy";
  }
}
