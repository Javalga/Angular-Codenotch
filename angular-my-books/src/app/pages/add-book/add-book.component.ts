import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  constructor(private bookService: BookService) { }
  createAndPush(id_user: string, title: string, type: string, author: string, price: string, url: string) {
    let book = new Book(0, parseInt(id_user), title, type, author, parseInt(price), url)
    this.bookService.add(book).subscribe(data => console.log(data))
  }
}
