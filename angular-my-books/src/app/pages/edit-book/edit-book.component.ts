import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Book } from 'src/app/models/book';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  constructor(public bookService: BookService, public userService: UserService) { }
  editAndPush(id_book: string, title: string, type: string, author: string, price: string, photo: string) {
    let currentBook = this.bookService.books.find(book => book.id_book === parseInt(id_book))
    console.log(currentBook);

    let book = new Book(parseInt(id_book), this.userService.user.id_user, title || currentBook.title, type || currentBook.type, author || currentBook.author, parseInt(price) || currentBook.price, photo || currentBook.photo)
    this.bookService.edit(book).subscribe(data => console.log(data))
  }
}