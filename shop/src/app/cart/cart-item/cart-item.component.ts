import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../products/product";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  host: {
    '(mouseenter)': 'hover($event)',
    '(mouseleave)': 'hover($event)'
  }
})
export class CartItemComponent implements OnInit {

  @Input()
  product: Product;

  styles: string = "cart-item";

  constructor() { }

  ngOnInit() {
  }

  hover(event: Event): void {
    this.styles = event.type == 'mouseenter' ? "cart-item cart-item-fill" : "cart-item";
  }
}
