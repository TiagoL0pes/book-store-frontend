import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Author } from '../../shared/models/author';
import { AuthorService } from '../../shared/services/author.service';
import { MessageService } from '../../shared/services/message.service';
import { Message } from '../../shared/enums/message.enum';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authorForm: FormGroup;
  author: Author;
  authors: Array<Author>;
  loading$ = new BehaviorSubject<any>(true);

  constructor(
    private _formBuilder: FormBuilder,
    private _service: AuthorService,
    private _messageService: MessageService
  ) {
    this.service.endpoint = 'authors';
  }

  ngOnInit() {
    this.author = new Author();
    this.authorForm = this.createForm();
    this.reset();
  }

  loadAuthor(author: Author) {
    this.updateForm(author);
  }

  list() {
    this.loading$.next(true);

    this.service.list()
      .subscribe((res: Array<Author>) => this.authors = res,
        error => this.messageService.showErrorMessage(),
        () => this.loading$.next(false));
  }

  updateList(author) {
    this.authors.push(author);
  }

  saveOrUpdate() {
    this.author = this.authorForm.getRawValue();

    if (this.author.id) {
      this.service.update(this.author.id, this.author)
        .subscribe(res => {
          this.messageService.showSuccessMessage(Message.AUTHOR_UPDATED);
          this.updateList(res)
        }, error => this.messageService.showErrorMessage(),
          () => this.reset());
    } else {
      this.service.save(this.author)
        .subscribe(res => {
          this.messageService.showSuccessMessage(Message.AUTHOR_ADDED);
          this.updateList(res);
        }, error => this.messageService.showErrorMessage(),
          () => this.reset());
    }
  }

  delete(author) {
    this.messageService.showConfirmDialog()
      .then((result) => {
        if (result.value) {
          this.service.delete(author.id)
            .subscribe(res => {
              this.messageService.showDeleteMessage(Message.AUTHOR_DELETED);
              this.list();
            }, error => this.messageService.showErrorMessage());
        }
      });
  }

  reset() {
    this.author = new Author();
    this.authorForm.reset();
    this.list();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [this.author.id],
      name: [this.author.name, Validators.required],
      email: [this.author.email,
      Validators.compose([
        Validators.required,
        Validators.email
      ])]
    });
  }

  updateForm(author: Author) {
    Object.keys(this.authorForm.controls).forEach(key => {
      this.authorForm.controls[key].setValue(author[key]);
    });
  }

  get formBuilder() {
    return this._formBuilder;
  }

  get service() {
    return this._service;
  }

  get messageService() {
    return this._messageService;
  }

}
