import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './interfaces';

@Injectable({ providedIn: 'root' })
export class BookResolver implements Resolve<Book> {
  resolve(
    route: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot,
  ): Observable<Book> | Promise<Book> | Book {
    return of(route.params.id).pipe();
  }
}
