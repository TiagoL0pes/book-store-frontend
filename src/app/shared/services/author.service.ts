import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends GenericService<Author> {

  constructor(http: HttpClient) {
    super(http);
  }
}
