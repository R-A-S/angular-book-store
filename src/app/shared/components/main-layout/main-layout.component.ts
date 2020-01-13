import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces';
import { StateService } from '../../services/state.service';
import { browserRefresh } from '../../../app.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    public auth: AuthService,
    private state: StateService,
  ) {}

  ngOnInit(): void {
    this.state.user.subscribe((result) => {
      this.user = result;
    });

    if (browserRefresh) {
      this.state.getState();
    }

  }

  logout(): void {
    console.log(this.user);
    this.auth.logout();
    this.router.navigate(['/signin']);
  }
}
