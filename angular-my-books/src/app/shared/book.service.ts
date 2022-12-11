import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url: string;
  public books: Book[] = []
  constructor(private http: HttpClient) {
    this.books = []
  }
  getAll(id: number) {
    this.url = `http://localhost:3000/book?id_user=${id}`
    console.log(this.url);
    return this.http.get(this.url)
  }
  getOne(id: number, id_user: number) {
    console.log(id_user);

    this.url = `http://localhost:3000/book?id_user=${id_user}&id_book=${id}`
    return this.http.get(this.url)
  }
  add(newBook: Book) {
    this.url = "http://localhost:3000/book"
    return this.http.post(this.url, newBook)
  }
  edit(updatedBook: Book) {
    this.url = "http://localhost:3000/book"
    return this.http.put(this.url, updatedBook)
  }
  delete(id: number) {
    this.url = "http://localhost:3000/book"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: { id_book: id } }
    return this.http.delete(this.url, httpOptions)
  }
}
