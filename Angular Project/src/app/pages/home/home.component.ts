import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  booklist: Book[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.api.getBooks().subscribe({
      next: (result: Book[]) => {
        this.booklist = result;
      },
      error: (error) => console.log('Error fetching books:', error),
    });
  }

  // Navigates to wishlist page
  navigateToWishlist() {
    this.router.navigate(['/wishlist']);  
  }

  // Navigates to borrowed books page
  navigateToBorrowedBooks() {
    this.router.navigate(['/borrowed']);  
  }

  onBookClick(id: any) {
    const selectedBook = this.booklist.find(
      (book) => (book.id) === id
    );
    if (selectedBook) {
      this.router.navigate(['/books', id], {
        state: {
          title: selectedBook.title,
          author: selectedBook.author,
          description: selectedBook.description,
          genre: selectedBook.genre,
          publishedYear: selectedBook.publishedYear,
          coverImage: selectedBook.coverImage
        }
      });
    }
  }
}
