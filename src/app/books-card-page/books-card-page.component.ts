import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { Book } from '../shared/interfaces';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-books-card-page',
  templateUrl: './books-card-page.component.html',
  styleUrls: ['./books-card-page.component.scss'],
})
export class BooksCardPageComponent implements OnInit {
  book: Book;

  cart: Array<Book>;

  book$: Observable<Book>;

  currentCount = 1;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private state: StateService,
  ) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.api.fetchBook(params.id)),
    );
    this.state.cart.subscribe((result) => {
      this.cart = result;
    });
    this.state.book.subscribe((result) => {
      this.book = result;
    });
    this.validateCount(1, null);
  }

  increaseCount(): void | null {
    console.log(this.currentCount);
    console.log(this.book.count);
    this.currentCount = this.validateCount(this.currentCount, true);
  }

  decreaseCount(): void {
    console.log(this.currentCount);
    console.log(this.book.count);
    this.currentCount = this.validateCount(this.currentCount, false);
  }

  validateCount(currentCount, operation): number {
    const cartItem = this.cart.find((book) => book.id === this.book.id);
    const freeCount = cartItem
      ? this.book.count - cartItem.count
      : this.book.count;

    if (operation !== null) {
      const isValid = operation ? currentCount < freeCount : currentCount > 0;
      if (!isValid) {
        return freeCount > 0 ? currentCount : 0;
      }
      return operation ? currentCount + 1 : currentCount - 1;
    }

    return freeCount === 0 ? 0 : 1;
  }
}
