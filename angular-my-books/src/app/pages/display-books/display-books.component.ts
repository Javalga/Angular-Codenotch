import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { AddBookService } from 'src/app/shared/add-book.service';
import { OnInit } from "@angular/core"

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  public books: Book[];
  public selectedBook: Book;
  public isDeleted: String
  constructor(public AddBookService: AddBookService) {
    this.books = AddBookService.books
    this.selectedBook;
  }
  ngOnInit(): void {

  }
  searchBarHandler(id: string) {
    let selected = this.AddBookService.getOne(Number(id))
    this.selectedBook = selected
  }
  deleteBook(id: number) {
    this.AddBookService.delete(id)
  }
}
