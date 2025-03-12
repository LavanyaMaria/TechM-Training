import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../model/book';
import { ApiService } from '../../services/api.service';
import { Borrowed } from '../../model/borrow';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Borrowed[] = [];
  libraryBooks: Book[] = [];
  id: any='';
  title: string='';

  constructor(private api: ApiService, public router: Router) {}

  ngOnInit() {
    // Fetch borrowed books
    this.api.getBorrowedBooks().subscribe((data: Borrowed[]) => {
      this.books = data;
    });

    // Fetch all library books
    this.api.getBooks().subscribe((data: Book[]) => {
      this.libraryBooks = data;
    });
  }

  // ✅ Function to Calculate Return Date (7 days from now)
  private getReturnDate(): string {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 7);
    return returnDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  // ✅ Add Book to Collection
  addBook(book: Book) {
    if (this.books.some(b => b.id === book.id)) {
      console.warn(`Book with ID ${book.id} is already borrowed.`);
      return;
    }
  
    const newBorrowedBook: Borrowed = { ...book, returnDate: this.getReturnDate() };
  
    console.log('Sending request to add book:', newBorrowedBook);
  
    this.api.addBorrowedBook(newBorrowedBook).subscribe({
      next: () => {
        console.log('Book successfully added:', newBorrowedBook);
        
        // Fetch updated borrowed books
        this.api.getBorrowedBooks().subscribe({
          next: (data: Borrowed[]) => {
            this.books = data;
            console.log('Updated Borrowed Books List:', this.books);
            alert('Book added to collection!');
  
            // ✅ Navigate to Borrowed Books Page
            this.router.navigate(['/borrowed']);
          },
          error: (error) => console.error('Error fetching updated borrowed books:', error),
        });
      },
      error: (error) => console.error('Error adding book:', error),
    });
  }  
  removeBook(bookId: number) {
    console.log('Trying to remove book from borrowed collection with ID:', bookId);

  if (!bookId) {
    console.error('Invalid book ID, cannot remove.');
    return;
  }

  this.api.deleteBook(bookId).subscribe({
    next: () => {
      console.log(`Book with ID ${bookId} removed from borrowed collection.`);
      alert('Book removed from your collection!');

      // ✅ Update the UI by filtering out the removed book
      this.books = this.books.filter(book => book.id !== bookId);
    },
    error: (error: any) => console.error('Error removing book from borrowed collection:', error),
  });
}
}