import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  public books: Book[]
  constructor() {
    this.books = []
  }
  getAll(): Book[] {
    return this.books
  }
  getOne(id: number): Book {
    console.log('eo');

    return this.books.find(book => book.book_id === id)
  }
  add(book: Book) {
    this.books.push(book)
  }
  edit(updatedBook: Book): Boolean {
    let selectedIndex = this.books.findIndex(book => book.book_id = updatedBook.book_id)
    this.books[selectedIndex] = updatedBook
    if (selectedIndex < 0) return false
    else return true
  }
  delete(id: number) {
    let selectedIndex = this.books.findIndex(book => book.book_id = id)
    this.books.splice(selectedIndex, 1)
  }
}
