import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces';

@Injectable()
export class StateService {
  private cartCountSource = new BehaviorSubject<number>(0);

  cartCount = this.cartCountSource.asObservable();

  private userSource = new BehaviorSubject<User>({ username: '' });

  user = this.userSource.asObservable();

  changeCartCount(cartCount): void {
    this.cartCountSource.next(cartCount);
  }

  changeUser(user): void {
    this.userSource.next(user);
  }
}
