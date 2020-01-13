import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/interfaces';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Array<Book>;

  constructor(private state: StateService) {}

  ngOnInit() {
    this.state.cart.subscribe((result) => {
      this.cart = result;
    });
  }
}
