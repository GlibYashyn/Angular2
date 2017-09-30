import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { GeneratorService } from './services/generator.service';
import { App_Id, RandomFactory } from './services/random-factory';
import { ConfigOptionsService } from './services/config-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    GeneratorService,
    { provide: App_Id, useFactory: RandomFactory(5), deps: [GeneratorService] }
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private configService: ConfigOptionsService,
    @Inject(App_Id) private appId: string) {}

  title = "Products";
  session = "";

  ngOnInit() {
    this.session = this.appId;
    this.configService.addConfig("date", new Date());
  }

  @ViewChild(CartComponent) cart: CartComponent;

  addToCart(product){
    this.cartService.addProduct(product);
    this.cart.reloadProducts();
    console.info("Added to cart");
  }
}
