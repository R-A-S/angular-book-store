import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { BooksCardPageComponent } from './books-card-page/books-card-page.component';
import { BookResolver } from './shared/book.resolver';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'signin',
        component: SigninPageComponent,
      },
      {
        path: 'books',
        component: BooksPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'books/:id',
        component: BooksCardPageComponent,
        resolve: {
          post: BookResolver,
        },
        canActivate: [AuthGuard],
      },
      {
        path: 'cart',
        component: CartPageComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'error',
    component: NotfoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
