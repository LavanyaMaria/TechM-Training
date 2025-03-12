import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../model/book';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrl: './wishlist-card.component.css'
})
export class WishlistCardComponent {
  @Input() wishlist: Book[] = [];
  @Output() remove = new EventEmitter<number>();
  @Input() searchText: string = ''; 

  removeBook(bookId: number) {
    this.remove.emit(bookId);
  }
}
