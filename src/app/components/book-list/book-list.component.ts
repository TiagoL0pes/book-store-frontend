import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.bookForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      isbn: [''],
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  get formBuilder() {
    return this._formBuilder;
  }

}
