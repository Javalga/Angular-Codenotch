import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent {

  public selectedBook: Book;
  public isDeleted: String;
  public books: Book[]
  constructor(public bookService: BookService, public userService: UserService) {
    console.log(this.userService);
    console.log(this.userService.user);

    bookService.getAll(this.userService.user.id_user).subscribe((data: Book[]) => {
      this.bookService.books = data;
      console.log(data);
    })
  }
  searchBarHandler(id: string) {
    this.bookService.getOne(parseInt(id), this.userService.user.id_user).subscribe((data: Book) => {
      this.selectedBook = data[0]
    })
  }
  deleteBook(id: number) {
    let index = this.bookService.books.findIndex(item => item.id_book = id)
    this.bookService.delete(id).subscribe(() => { this.bookService.books.splice(index, 1) })
  }

  editBook(id_book: string, id_user: string, title: string, type: string, author: string, price: string, photo: string) {
    let currentBook = new Book(parseInt(id_book), parseInt(id_user), title, type, author, parseInt(price), photo)
    this.bookService.edit(currentBook).subscribe(() => {
      let index = this.bookService.books.findIndex(item => item.id_book = currentBook.id_book)
      this.bookService.books[index] = currentBook
    })
  }
}
