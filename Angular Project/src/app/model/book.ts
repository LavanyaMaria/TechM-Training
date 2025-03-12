export interface Book {
  id: number;
  title: string;
  author: string; // Changed from authorId to author
  genre: string;
  publishedYear: number;
  coverImage: string;
  description: string; // Added description field
}