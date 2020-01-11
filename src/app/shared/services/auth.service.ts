import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return null;
    }
    return token;
  }

  login(user: User): Observable<any> {
    return this.http
      .post('https://js-band-api.glitch.me/signin', { username: user.username })
      .pipe(tap(this.setToken));
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(responce: User | null): void {
    if (responce) {
      localStorage.setItem('token', responce.token);
    } else {
      localStorage.clear();
    }
  }
}
