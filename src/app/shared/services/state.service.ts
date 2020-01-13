import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book, User } from '../interfaces';
import { AuthService } from './auth.service';

@Injectable()
export class StateService {
  private cartSource = new BehaviorSubject<Array<Book>>([]);

  cart = this.cartSource.asObservable();

  private userSource = new BehaviorSubject<User>({ username: '' });

  user = this.userSource.asObservable();

  private bookSource = new BehaviorSubject<Book>({});

  book = this.bookSource.asObservable();

  constructor(private auth: AuthService) {}

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

  setState(): void {
    localStorage.setItem(
      `store${this.auth.token}`,
      JSON.stringify({
        cart: this.cartSource.value,
        user: this.userSource.value,
        book: this.bookSource.value,
      }),
    );
  }

  getState(): void {
    if (this.auth.isAuthenticated()) {
      const store = JSON.parse(localStorage.getItem(`store${this.auth.token}`));

      this.changeBook(store.book);
      this.changeUser(store.user);
      this.changeCart(store.cart);
    }
  }
}
