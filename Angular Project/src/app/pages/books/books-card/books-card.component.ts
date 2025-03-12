import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../model/book';
import { Borrowed } from '../../../model/borrow';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
  @Input() book!: Borrowed;
  @Input() isBorrowed: boolean = false;
  @Output() addToCollection = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<number>();

  addBook() {
    if (!this.isBorrowed) {
      this.addToCollection.emit(this.book);
    }
  }
  removeBook() {
    if (!confirm(`Are you sure you want to remove "${this.book.title}"?`)) {
      return;
    }
    this.remove.emit(this.book.id); 
  }
}
