import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends GenericService<Book> {

  constructor(http: HttpClient) {
    super(http);
  }
}
