import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    return this.http
      .post('https://js-band-api.glitch.me/signin', { username: user.username })
      .pipe(tap(this.setToken));
  }

  logout(): void {}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(request: User): void {
    console.log(request);
  }
}
