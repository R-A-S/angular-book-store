import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  currentBook: Book;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.book.subscribe((result) => {
      this.currentBook = result;
    });
  }

  updateBook(book) {
    this.state.changeBook(book);
  }
}
