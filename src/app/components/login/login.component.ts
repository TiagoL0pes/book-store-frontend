import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../shared/services/login.service';
import { TemplateService } from '../../shared/services/template.service';
import { MessageService } from '../../shared/services/message.service';
import { UserService } from '../../shared/services/user.service';
import { Message } from '../../shared/enums/message.enum';
import { Route } from '../../shared/enums/route.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  signIn = true;
  signUp = false;
  private subscriptions = new Array<Subscription>();

  constructor(
    private router: Router,
    private service: LoginService,
    private userService: UserService,
    private templateService: TemplateService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.templateService.setInvisible();
    this.userService.endpoint = 'users';
  }

  ngOnInit() {
    const session = JSON.parse(localStorage.getItem('session'));

    if (session !== null) {
      this.router.navigate([Route.HOME]);
    }

    this.loginForm = this.createForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(param: boolean) {
    const user = this.loginForm.getRawValue();
    if (param) {
      const subscription = this.service.login(user)
        .subscribe(res => {
          delete user.password;
          user.token = res.headers.get('authorization');;
          this.service.addSession(user);

          this.templateService.setVisible();
          this.router.navigate([Route.HOME]);
        }, error => this.messageService.showErrorMessage());

      this.subscriptions.push(subscription);
    } else {
      const subscription = this.userService.save(user)
        .subscribe(res => {
          this.messageService.showSuccessMessage(Message.USER_CREATED);
          this.reset();
        }, error => this.messageService.showErrorMessage(Message.OOPS, Message.USER_ALREADY_EXISTS));

      this.subscriptions.push(subscription);
    }

  }

  toggleForm(toggle?: boolean) {
    if (toggle) {
      this.signIn = true;
      this.signUp = false;
    } else {
      this.signIn = false;
      this.signUp = true;
    }

    this.reset();
  }

  reset() {
    this.loginForm.reset();
  }
}
