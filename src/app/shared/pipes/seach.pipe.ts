import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces';

@Pipe({
  name: 'searchBook',
})
export class SeachBookPipe implements PipeTransform {
  transform(books: Book[], search = ''): Book[] {
    if (!search.trim()) {
      return books;
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }
}
