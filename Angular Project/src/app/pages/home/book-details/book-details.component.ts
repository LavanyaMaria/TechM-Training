import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Borrowed } from '../../../model/borrow';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'], //  Fixed styleUrls
})
export class BookDetailsComponent {
  id: any = '';
  title: string = '';
  author: string = '';
  description: string = '';
  genre: string = '';
  publishedYear: number = 0;
  coverImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);
    if (navigation?.extras.state) {
      this.title = navigation.extras.state['title'];
      this.author = navigation.extras.state['author'];
      this.genre = navigation.extras.state['genre'];
      this.publishedYear = navigation.extras.state['publishedYear'];
      this.coverImage = navigation.extras.state['coverImage'];
      this.description=navigation.extras.state['description'];
    }
  }

  ngOnInit() {
    this.api.getDetails(this.id).subscribe({
      next: (result: any) => {
        console.log(result);
        const book = Array.isArray(result) ? result[0] : result;

        this.title = book.title || 'Unknown Title';
        this.author = book.author || 'Unknown Author';
        this.genre = book.genre || 'Unknown Genre';
        this.publishedYear = book.publishedYear || 0;
        this.coverImage = book.coverImage || '';
        this.description = book.description || 'No description available';
      },
      error: (error: any) => console.log(error),
    });
  }


  //  Add to Wishlist (Redirect)
  addToWishlist() {
    const bookToAdd = {
      id: this.id,
      title: this.title,
      author: this.author,
      description: this.description,
      genre: this.genre,
      publishedYear: this.publishedYear,
      coverImage: this.coverImage,
    };
  
    //  Call API to add book to wishlist
    this.api.addToWishlist(bookToAdd).subscribe({
      next: () => {
        alert(' Book added to Wishlist!');
        this.router.navigate(['/wishlist']); //  Navigate after adding
      },
      error: (error: any) => console.error(' Error adding to wishlist:', error),
    });
  }

  //  Add to Collection
  addToCollection() {
    if (!this.id) {
      console.error('Invalid book ID, cannot add to collection.');
      return;
    }

    const borrowedBook: Borrowed = {
      id: this.id,
      title: this.title,
      author: this.author,
      description: this.description, //  Already converted to string
      genre: this.genre,
      publishedYear: this.publishedYear,
      coverImage: this.coverImage,
      returnDate: this.getReturnDate(),
    };

    console.log('Adding Book to Collection:', borrowedBook); //  Debugging

    this.api.addBorrowedBook(borrowedBook).subscribe({
      next: () => {
        console.log('Book added successfully:', borrowedBook);
        alert('Book successfully added to your collection!');
        this.router.navigate(['/borrowed']);
      },
      error: (error: any) => console.error('Error adding book:', error),
    });
  }

  //  Generate return date (30 days from today)
  private getReturnDate(): string {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 30);
    return returnDate.toISOString().split('T')[0];
  }
}
