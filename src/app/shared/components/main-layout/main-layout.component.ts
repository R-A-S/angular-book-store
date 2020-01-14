import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Book, User } from '../../interfaces';
import { StateService } from '../../services/state.service';
import { browserRefresh } from '../../../app.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  user: User;

  cart: Array<Book>;

  constructor(
    private router: Router,
    public auth: AuthService,
    private state: StateService,
  ) {}

  ngOnInit(): void {
    this.state.user.subscribe((result) => {
      this.user = result;
    });
    this.state.cart.subscribe((result) => {
      this.cart = result;
    });

    if (browserRefresh) {
      this.state.getState();
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/signin']);
  }
}
