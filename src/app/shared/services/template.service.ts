import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private show = new BehaviorSubject<boolean>(true);
  public state$ = this.show.asObservable();

  constructor() { }

  setVisible() {
    this.show.next(true);
  }

  setInvisible() {
    this.show.next(false);
  }
}
