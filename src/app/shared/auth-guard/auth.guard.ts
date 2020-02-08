import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { LoginService } from '../services/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private service: LoginService
    ) { }

    canActivate(): boolean {
        const session = JSON.parse(localStorage.getItem('session'));
        if (session !== null) {
            const token = jwt_decode(session.token);
            const isValid = new Date() <= new Date(token.exp * 1000);

            if (isValid) {
                return true;
            }

            this.service.removeSession();
        }

        this.router.navigate(['login']);

        return false;
    }

}