import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { Route } from './shared/enums/route.enum';

const routes: Routes = [
  {
    path: Route.LOGIN,
    component: LoginComponent
  },
  {
    path: Route.HOME,
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: Route.BOOKS,
    component: BookListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: Route.AUTHORS,
    component: AuthorListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
