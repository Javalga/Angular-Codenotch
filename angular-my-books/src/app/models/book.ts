export class Book {
  public book_id: number;
  public user_id: number;
  public title: string;
  public bookType: string;
  public author: string;
  public price: number
  public photo: string
  constructor(book_id: number = 0, user_id: number = 0, title: string, bookType: string, author: string, price: number, photo: string,) {
    this.book_id = book_id;
    this.user_id = user_id;
    this.title = title;
    this.bookType = bookType;
    this.author = author;
    this.price = price;
    this.photo = photo;
  }
}
