import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../shared/interfaces';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Array<Book>;

  // total = this.updateTotal();

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.cart.subscribe((result) => {
      this.cart = result;
    });
  }


  // updateTotal(): void {
  //   this.cart
  //     .reduce((acc, book) => acc + book.price * book.count, 0)
  //     .toFixed(2);
  // }
}
