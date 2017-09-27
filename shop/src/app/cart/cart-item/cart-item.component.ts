import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from "../../products/product";
import { CartService } from "../cart.service";

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

  @Output()
  removeProduct: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  updateTotal: EventEmitter<any> = new EventEmitter<any>();

  quantity: number = 1;
  styles: string = "cart-item";

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addItem(): void {
    this.cartService.addProduct(this.product);
    this.quantity++;
    this.updateTotal.emit();
  }

  removeItem(): void {
    this.cartService.removeProduct(this.product);
    this.quantity--;
    this.updateTotal.emit();
  }

  deleteItem(): void {
    this.cartService.removeByName(this.product.name);
    this.removeProduct.emit(this.product.name);
  }

  hover(event: Event): void {
    this.styles = event.type == 'mouseenter' ? "cart-item cart-item-fill" : "cart-item";
  }
}
