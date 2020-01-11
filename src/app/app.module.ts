import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { BooksCardPageComponent } from './books-card-page/books-card-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { BookComponent } from './shared/components/book/book.component';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    BooksPageComponent,
    MainLayoutComponent,
    BooksCardPageComponent,
    CartPageComponent,
    NotfoundPageComponent,
    BookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
