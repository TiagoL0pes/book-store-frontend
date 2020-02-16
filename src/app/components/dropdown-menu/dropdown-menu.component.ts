import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { MessageService } from '../../shared/services/message.service';
import { Route } from '../../shared/enums/route.enum';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor(
    private service: LoginService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    this.messageService.showLogoutMessage();
    this.router.navigate([Route.LOGIN]);
  }

}
