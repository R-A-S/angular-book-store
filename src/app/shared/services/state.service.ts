import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book, User } from '../interfaces';

@Injectable()
export class StateService {
  private cartSource = new BehaviorSubject<Array<Book>>([]);

  cart = this.cartSource.asObservable();

  private userSource = new BehaviorSubject<User>({ username: '' });

  user = this.userSource.asObservable();

  private bookSource = new BehaviorSubject<Book>({});

  book = this.bookSource.asObservable();

  changeCart(cart): void {
    this.cartSource.next(cart);
    this.setState();
  }

  changeUser(user): void {
    this.userSource.next(user);
    this.setState();
  }

  changeBook(book): void {
    this.bookSource.next(book);
    this.setState();
  }

  setState() {
    localStorage.setItem(
      'store',
      JSON.stringify({
        cart: this.cart.source._value,
        user: this.user.source._value,
        book: this.book.source._value,
      }),
    );
  }

  getState(): void {
    const store = JSON.parse(localStorage.getItem('store'));
    console.log(store);
    this.changeBook(store.book);
    this.changeUser(store.user);
    this.changeCart(store.cart);
  }
}
