import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/home/book-details/book-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginComponent } from './common/login/login.component';
import { RequestComponent } from './pages/request/request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'borrowed', component: BooksComponent },
  { path: 'books', component: HomeComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'request', component: RequestComponent},
  { path: '**', redirectTo: '/books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
