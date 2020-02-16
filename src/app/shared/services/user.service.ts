import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Author } from '../models/author';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User> {

  constructor(http: HttpClient) {
    super(http);
  }
}
