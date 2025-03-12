import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './pages/home/book-card/book-card.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksCardComponent } from './pages/books/books-card/books-card.component';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './pages/home/book-details/book-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistCardComponent } from './pages/wishlist/wishlist-card/wishlist-card.component';
import { BookTitleFilterPipe } from './pipes/book-title-filter.pipe';
import { GenreFilterPipe } from './pipes/genre-filter.pipe';
import { LoginComponent } from './common/login/login.component';
import { RequestComponent } from './pages/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuBarComponent,
    BookCardComponent,
    BooksComponent,
    BooksCardComponent,
    BookDetailsComponent,
    WishlistComponent,
    WishlistCardComponent,
    BookTitleFilterPipe,
    GenreFilterPipe,
    LoginComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
