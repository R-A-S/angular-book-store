import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../interfaces';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  ROOT_URL = 'https://js-band-api.glitch.me/';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`,
    }),
  };

  constructor(private http: HttpClient, private auth: AuthService) {}

  fetchBooks(): Observable<Array<Book>> {
    return this.http
      .get<Array<Book>>(`${this.ROOT_URL}books`, {
        ...this.httpOptions,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return response.body;
        }),
        catchError((err) => {
          return throwError(err);
        }),
      );
  }

  // fetchBook(bookId): Promise<Response> {
  //   return this.http
  //     .get<Book>(`${this.ROOT_URL}books/${bookId}`, {
  //       ...httpOptions,
  //       observe: 'response',
  //     })
  //     .pipe(
  //       map((response) => {
  //         // console.log(response);
  //         return response.body;
  //       }),
  //       catchError((err) => {
  //         console.log(err);
  //         return throwError(err);
  //       }),
  //     );
  // }
  //
  // purchase(booksId): Promise<Response> {
  //   httpOptions.headers.set('Content-Type', 'application/json');
  //   return fetch(`${this.ROOT_URL}purchase`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.token}`,
  //     },
  //     body: JSON.stringify({ books: booksId }),
  //   });
  // }
}
