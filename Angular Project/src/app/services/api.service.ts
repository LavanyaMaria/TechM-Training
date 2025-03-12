import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrowed } from '../model/borrow';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addBorrowedBook(newBorrowedBook: Borrowed): Observable<Borrowed> {
    return this.http.post<Borrowed>('http://localhost:4500/borrowed', newBorrowedBook);
  }

  deleteBook(id: number) {
    return this.http.delete(`http://localhost:4500/borrowed/${id}`);
  }

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get('http://localhost:4500/books');
  }

  getBorrowedBooks(): Observable<any> {
    return this.http.get('http://localhost:4500/borrowed');
  }

  getDetails(id: number): Observable<any> {
    return this.http.get(`http://localhost:4500/books/${id}`);

  }
  getWishlist(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:4500/wishlist`);
  }

  // ✅ Add Book to Wishlist
  addToWishlist(book: Book): Observable<Book> {
    return this.http.post<Book>(`http://localhost:4500/wishlist`, book);
  }

  // ✅ Remove Book from Wishlist
  removeFromWishlist(bookId: number) {
    return this.http.delete(`http://localhost:4500/wishlist/${bookId}`);
  }

  addRequest(requestData: any): Observable<any> {
    return this.http.post(`http://localhost:4500/request`, requestData);
  }
}
