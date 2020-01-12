import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { Book } from '../shared/interfaces';

@Component({
  selector: 'app-books-card-page',
  templateUrl: './books-card-page.component.html',
  styleUrls: ['./books-card-page.component.scss'],
})
export class BooksCardPageComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.api.fetchBook(params.id)),
    );
  }
}
