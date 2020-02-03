import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(): boolean {
        const session = JSON.parse(localStorage.getItem('session'));
        if (session !== null) {
            const token = jwt_decode(session.token);
            const isValid = new Date() <= new Date(token.exp * 1000);

            return isValid ? true : false;
        }

        this.router.navigate(['login']);

        return false;
    }

}