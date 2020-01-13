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
  }

  changeUser(user): void {
    this.userSource.next(user);
  }

  changeBook(book): void {
    this.bookSource.next(book);
  }
}
