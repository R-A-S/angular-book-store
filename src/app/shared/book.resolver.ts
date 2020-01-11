import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Book, BookService } from './services/book.service';

@Injectable({ providedIn: 'root' })
export class BookResolver implements Resolve<Book> {
  constructor(private bookService: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Book> | Promise<Book> | Book {
    return of(route.params.id).pipe(
      delay(1500), // response delay
    );
  }
}
