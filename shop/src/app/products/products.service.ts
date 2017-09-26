import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './product';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Smartphone",
        description: "Smartphone",
        price: 500,
        category: Category.Gadget,
        isAvailable: true,
        ingredients: ["Glass", "Plastic", "Alluminium"],
        equivalents: ["Another smartphone"]
      }, {
        name: "T-Shirt",
        description: "T-Shirt",
        price: 10,
        category: Category.Clothes,
        isAvailable: true,
        ingredients: ["Cotton"],
        equivalents: ["Hoodie"]
      }, {
        name: "Apple juice",
        description: "Apple juice",
        price: 5,
        category: Category.Food,
        isAvailable: true,
        ingredients: ["Apple juice", "Water", "Sugar"],
        equivalents: ["Orange juice", "Cherry juice"]
      }
    ];
  }
}

