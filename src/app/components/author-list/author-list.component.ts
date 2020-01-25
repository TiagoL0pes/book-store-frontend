import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authorForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authorForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get formBuilder() {
    return this._formBuilder;
  }

}
