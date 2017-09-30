import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { RandomFactory, App_Id } from './services/random-factory';
import { ColorChangedDirective } from './directives/color-changed.directive';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangedDirective
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: {App: "Products", Ver: "1.0"} },
  ]
})
export class AppModule { }
