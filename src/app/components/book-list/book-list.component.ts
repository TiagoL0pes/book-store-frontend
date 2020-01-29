import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Author } from '../../shared/models/author';
import { Book } from '../../shared/models/book';
import { AuthorService } from '../../shared/services/author.service';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookForm: FormGroup;
  book: Book;
  books: Array<Book>;
  authors: Array<Author>;
  loading$ = new BehaviorSubject<any>(true);

  constructor(
    private _formBuilder: FormBuilder,
    private _service: BookService,
    private _authorService: AuthorService
  ) {
    this.service.endpoint = 'books';
    this.authorService.endpoint = 'authors';
  }

  ngOnInit() {
    this.book = new Book();
    this.loadAuthors();
    this.bookForm = this.createForm();
    this.reset();
  }

  loadBook(book: Book) {
    this.updateForm(book);
  }

  loadAuthors() {
    this.authorService.list()
      .subscribe((res: Array<Author>) => this.authors = res),
      error => console.log(error);
  }

  list() {
    this.loading$.next(true);

    this.service.list()
      .subscribe((res: Array<Book>) => this.books = res,
        error => console.log(error),
        () => this.loading$.next(false));
  }

  updateList(book) {
    this.books.push(book);
  }

  saveOrUpdate() {
    this.formToBook();
    if (this.book.id) {
      this.service.update(this.book.id, this.book)
        .subscribe(res => this.updateList(res),
          error => console.log(error),
          () => this.reset());
    } else {
      this.service.save(this.book)
        .subscribe(res => this.updateList(res),
          error => console.log(error),
          () => this.reset());
    }
  }

  delete(book) {
    this.service.delete(book.id)
      .subscribe(res => this.list(),
        error => console.log(error));
  }

  reset() {
    this.book = new Book();
    this.bookForm.reset();
    this.list();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [this.book.id],
      isbn: [this.book.isbn],
      title: [this.book.title, Validators.required],
      author: [this.book.author]
    });
  }

  updateForm(book: Book) {
    Object.keys(this.bookForm.controls).forEach(key => {
      this.bookForm.controls[key].setValue(book[key]);
    });
  }

  formToBook() {
    Object.keys(this.bookForm.controls).forEach(key => {
      if (key === 'author') {
        this.book.author = this.bookForm.controls[key].value;
      } else {
        this.book[key] = this.bookForm.controls[key].value;
      }
    });
  }

  compareTo(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  get formBuilder() {
    return this._formBuilder;
  }

  get service() {
    return this._service;
  }

  get authorService() {
    return this._authorService;
  }

}
