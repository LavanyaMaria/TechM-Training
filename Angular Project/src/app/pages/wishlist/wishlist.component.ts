import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../model/book';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  wishlistForm: FormGroup;
  wishlist: Book[] = [];
  searchText: string = ''; // For filtering books in wishlist
  libraryBooks: Book[] = []; // Store all books from the library

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.wishlistForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Fetch all books from the library
    this.api.getBooks().subscribe((books) => {
      this.libraryBooks = books;
    });

    // Fetch Wishlist
    this.api.getWishlist().subscribe((books) => {
      this.wishlist = books;
    });
  }
  selectedGenre: string = 'All'; // Default to 'All'

  // select genre for the genreFiter Pipe
  getUniqueGenres(): string[] {
    const genres = this.wishlist.map((book) => book.genre);
    return ['All', ...new Set(genres)]; // ✅ Get unique genres including 'All'
  }

  //  Add Book to Wishlist (Fetch from Library)
  addToWishlist() {
    if (this.wishlistForm.valid) {
      const { title, author, genre } = this.wishlistForm.value;

      //  Find the book in the library dataset
      const matchingBook = this.libraryBooks.find(
        (book) =>
          book.title.toLowerCase() === title.toLowerCase() &&
          book.author.toLowerCase() === author.toLowerCase() &&
          book.genre.toLowerCase() === genre.toLowerCase()
      );

      if (matchingBook) {
        //  Add the matched book (full details) to wishlist
        this.api.addToWishlist(matchingBook).subscribe(() => {
          this.wishlist.push(matchingBook); // Update UI
          this.wishlistForm.reset();
        });
      } else {
        alert(' Book not found in the library! Please check the details.');
      }
    }
  }

  //  Remove book from wishlist
  removeBook(bookId: number) {
    this.api.removeFromWishlist(bookId).subscribe(() => {
      this.wishlist = this.wishlist.filter((book) => book.id !== bookId); // Update UI after deletion
    });
  }
}
