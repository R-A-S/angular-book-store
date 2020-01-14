import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/interfaces';
import { StateService } from '../shared/services/state.service';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Array<Book>;

  total: string;

  message$: Observable<{}>;

  isFetching = false;

  constructor(private state: StateService, private api: ApiService) {}

  ngOnInit(): void {
    this.state.cart.subscribe((result) => {
      this.cart = result;
    });
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.cart
      .reduce((acc, book) => acc + book.price * book.count, 0)
      .toFixed(2);
  }

  purchase(): void {
    this.isFetching = true;
    const books = this.cart.map((book) => book.id);
    this.message$ = this.api.purchase(books);

    this.message$.subscribe(() => {
      this.isFetching = false;
    });
  }

  clearCart(): void {
    this.state.changeCart([]);
  }
}
