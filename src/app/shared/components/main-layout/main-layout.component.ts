import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {


  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/signin']);
  }
}
