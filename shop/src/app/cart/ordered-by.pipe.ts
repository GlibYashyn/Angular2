import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/product';

@Pipe({
  name: 'orderedBy'
})
export class OrderedByPipe implements PipeTransform {

  transform(value: Array<Product>, field: string, asc?: boolean): any {
    asc = !!asc;
    value.sort((a, b) => {
      if (a[field] < b[field]) {
        return asc ? -1 : 1;
      } else if (a[field] > b[field]) {
        return asc ? 1: -1;
      } else {
        return 0;
      }
    });
    return value;
  }

}
