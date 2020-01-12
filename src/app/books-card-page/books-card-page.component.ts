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

  count = 1;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.api.fetchBook(params.id)),
    );
  }

  decreaseCount(): void {
    this.count -= 1;
  }

  increaseCount(): void {
    this.count += 1;
  }

  // validateCount(operation) {
  //   // const {
  //   //   cart,
  //   //   book: { id, count: bookCount },
  //   // } = this.props;
  //
  //   // const cartItem = cart.find((book) => book.id === id);
  //   // const freeCount = cartItem
  //   //   ? this.book$.count - cartItem.currentCount
  //   //   : this.book$.count;
  //   const freeCount = 5;
  //   if (operation !== undefined) {
  //     const isValid = operation ? this.count < freeCount : this.count > 0;
  //     if (!isValid) {
  //       return freeCount > 0 ? this.count : 0;
  //     }
  //     return operation ? this.count + 1 : this.count - 1;
  //   }
  //
  //   return freeCount === 0 ? 0 : 1;
  // }
}
