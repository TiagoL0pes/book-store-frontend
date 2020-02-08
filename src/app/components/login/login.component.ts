import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { tap } from 'rxjs/operators';
import { User } from '../../shared/models/user';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private service: LoginService,
    private templateService: TemplateService,
    private formBuilder: FormBuilder
  ) {
    this.templateService.setInvisible();
  }

  ngOnInit() {
    const session = JSON.parse(localStorage.getItem('session'));

    if (session !== null) {
      this.router.navigate(['home']);
    }

    this.loginForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const user = this.loginForm.getRawValue();
    this.service.login(user)
      .subscribe(res => {
        delete user.password;
        user.token = res.headers.get('authorization');;
        this.service.addSession(user);

        this.templateService.setVisible();
        this.router.navigate(['home']);
      },
        error => console.log(error));
  }

}
