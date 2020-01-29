import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    BookListComponent,
    HomeComponent,
    AuthorListComponent,
    PageTitleComponent,
  ],
  exports: [
    BookListComponent,
    AuthorListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
