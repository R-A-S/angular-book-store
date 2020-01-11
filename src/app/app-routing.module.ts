import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { BooksCardPageComponent } from './books-card-page/books-card-page.component';
import { BookResolver } from './shared/book.resolver';
import { CartPageComponent } from './cart-page/cart-page.component';

// http://localhost:4200/ → HomeComponent
// http://localhost:4200/about → AboutComponent
//  → http://localhost:4200/about/extra → AboutExtraComponent
// http://localhost:4200/posts → PostsComponent
// http://localhost:4200/posts/:id → PostComponent
// http://localhost:4200/error → ErrorPageComponent
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'about',
//     component: AboutComponent,
//     canActivateChild: [AuthGuard],
//     children: [{ path: 'extra', component: AboutExtraComponent }],
//   },
//   { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
//   {
//     path: 'posts/:id',
//     component: PostComponent,
//     resolve: {
//       post: PostResolver,
//     },
//   },
//   { path: 'error', component: ErrorPageComponent },
//   { path: '**', redirectTo: '/error' },
// ];
const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'signin', component: SigninPageComponent },
      { path: 'books', component: BooksPageComponent },
      {
        path: 'books/:id',
        component: BooksCardPageComponent,
        resolve: {
          post: BookResolver,
        },
      },
      { path: 'cart', component: CartPageComponent },
      { path: 'error', component: NotfoundPageComponent },
      { path: '**', redirectTo: '/error' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
