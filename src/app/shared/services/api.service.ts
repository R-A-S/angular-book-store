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

  fetchBook(bookId: string): Observable<Book> {
    return this.http
      .get<Book>(`${this.ROOT_URL}books/${bookId}`, {
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

  purchase(booksId): Observable<any> {
    this.httpOptions.headers.set('Content-Type', 'application/json');
    return this.http
      .post<Book>(
        `${this.ROOT_URL}purchase`,
        { books: booksId },
        {
          ...this.httpOptions,
          observe: 'response',
        },
      )
      .pipe(
        map((response) => {
          return response.body;
        }),
        catchError((err) => {
          return throwError(err);
        }),
      );
  }
}
