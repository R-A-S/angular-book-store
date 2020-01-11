import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookService } from './services/book.service';
import { Book } from './interfaces';

@Injectable({ providedIn: 'root' })
export class BookResolver implements Resolve<Book> {
  constructor(private bookService: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Book> | Promise<Book> | Book {
    return of(route.params.id).pipe();
  }
}
