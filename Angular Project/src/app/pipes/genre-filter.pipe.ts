import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(wishlist: Book[], selectedGenre: string): Book[] {
    if (!wishlist || !selectedGenre || selectedGenre === 'All') {
      return wishlist; // ✅ If no genre is selected, return full list
    }
    return wishlist.filter(book => book.genre.toLowerCase() === selectedGenre.toLowerCase());
  }
}
