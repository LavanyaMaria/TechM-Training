import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'bookTitleFilter'
})
export class BookTitleFilterPipe implements PipeTransform {

  transform(books: Book[], searchText: string): Book[] {
    console.log("Filtering books with:", searchText); // ✅ Debugging
    if (!books || !searchText) {
      return books;
    }
    searchText = searchText.toLowerCase();
    return books.filter(book =>
      book.title.toLowerCase().includes(searchText)
    );
  }

}
