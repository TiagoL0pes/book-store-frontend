import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  login(form) {
    return this.http.post(`${environment.api}/login`, form, { observe: 'response', withCredentials: true });
  }

  logout() {
    localStorage.removeItem('session');
  }

  addSession(session) {
    localStorage.setItem('session', JSON.stringify(session));
  }

  removeSession() {
    localStorage.removeItem('session');
  }

  get http() {
    return this._http;
  }
}
