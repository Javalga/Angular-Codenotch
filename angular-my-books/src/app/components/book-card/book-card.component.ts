import { Component, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: Book
  @Input() isEven: boolean
  @Output() deleteEvent = new EventEmitter<any>()
  constructor() { }
  deleteBookChild(id: number) {
    let currentId = id;
    this.deleteEvent.emit(currentId)
  }
}
