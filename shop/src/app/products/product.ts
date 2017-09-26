export class Product {
  public name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable?: boolean;
  ingredients: Array<string>;
  equivalents: Array<string>;
}

export enum Category {
  Gadget = 1,
  Food,
  Clothes,
  Sport
}
