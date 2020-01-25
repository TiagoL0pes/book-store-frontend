import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {
  public endpoint: string

  constructor(
    private _http: HttpClient,
  ) { }

  save(form: T): Observable<T> {
    return this.http.post<T>(`${environment.api}/${this.endpoint}`, form);
  }

  find(id: string): Observable<T> {
    return this.http.get<T>(`${environment.api}/${this.endpoint}/${id}`);
  }

  list(): Observable<Array<T>> {
    return this.http.post<Array<T>>(`${environment.api}/${this.endpoint}/list`, {});
  }

  update(id: string, form: T): Observable<T> {
    return this.http.put<T>(`${environment.api}/${this.endpoint}/${id}`, form);
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${environment.api}/${this.endpoint}/${id}`);
  }

  get http() {
    return this._http;
  }

}
