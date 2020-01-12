import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces';

@Pipe({
  name: 'priceFilter',
})
export class PriceFilterPipe implements PipeTransform {
  transform(books: Book[], filter: string): Book[] {
    const value = filter.split(' ');
    const filterValue = {
      min: value[0],
      max: value[1],
    };
    return books.filter(
      (book) =>
        +filterValue.min <= book.price && book.price <= +filterValue.max,
    );
  }
}
