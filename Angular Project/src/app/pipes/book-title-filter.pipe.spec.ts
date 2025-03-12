import { BookTitleFilterPipe } from './book-title-filter.pipe';

describe('BookTitleFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookTitleFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
