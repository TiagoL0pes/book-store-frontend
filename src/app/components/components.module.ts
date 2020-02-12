import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookListComponent,
    HomeComponent,
    AuthorListComponent,
    PageTitleComponent,
    LoginComponent,
    DropdownMenuComponent,
  ],
  exports: [
    BookListComponent,
    AuthorListComponent,
    HomeComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ComponentsModule { }
