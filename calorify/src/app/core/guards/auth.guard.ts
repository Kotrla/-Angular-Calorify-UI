import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(public authService: AuthService, public router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | boolean | UrlTree {
		if (this.authService.isLoggedIn !== true) {
			window.alert('Access not allowed!');

			this.router.navigate(['/']);
		}

		return true;
	}
}
