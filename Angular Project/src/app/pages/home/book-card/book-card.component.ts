import { Component, Input } from '@angular/core';
import { Book } from '../../../model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book:Book={id: 0,title:'',author: '', description: '', genre: '',publishedYear: 0,coverImage: ''}
}
