import { Book } from './book';

export interface Borrowed extends Book {
  returnDate: string;
}
  