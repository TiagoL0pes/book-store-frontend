import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    this.router.navigate(['login']);
  }

}
