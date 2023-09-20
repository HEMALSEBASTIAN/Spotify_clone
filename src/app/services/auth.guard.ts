import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    return true;
};


import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { UserAuthService } from './userauth-service.service';
import { map } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: UserAuthService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        return this.authService.getAuthStatus().pipe(
            map((isAuthenticated) => {
                if (!isAuthenticated) {
                    this.router.navigate(['loginpage']);
                    return false;
                }
                return true;
            })
        ).toPromise() as Promise<boolean>;
    }
}