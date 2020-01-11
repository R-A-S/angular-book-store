import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { BooksCardPageComponent } from './books-card-page/books-card-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    BooksPageComponent,
    MainLayoutComponent,
    BooksCardPageComponent,
    CartPageComponent,
    NotfoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
