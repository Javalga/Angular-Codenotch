import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { AddBookService } from 'src/app/shared/add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  constructor(private addBookService: AddBookService) { }
  createAndPush(title: string, genre: string, author: string, price: string, url: string) {
    this.addBookService.books.push(new Book(0, 0, title, genre, author, Number(price), url))
  }
}
