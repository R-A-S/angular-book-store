import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Book } from '../shared/interfaces';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.books$ = this.api.fetchBooks();
  }
}
