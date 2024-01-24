import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.api;

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private router: Router, private http: HttpClient) {}

	login(email: string, password: string): Observable<string> {
		return this.http.post<any>(API + '/users/login', { email, password }).pipe(
			map((res: any) => {
				if (!!res?.token) {
					localStorage.setItem('access_token', res?.token);

					return 'login successful';
				}

				return 'login failed';
			})
		);
	}

	logout(): void {
		const removeToken = localStorage.removeItem('access_token');

		if (removeToken === null) {
			this.router.navigate(['/']);
		}
	}

	getToken(): string | null {
		return localStorage.getItem('access_token');
	}

	get isLoggedIn(): boolean {
		const authToken = localStorage.getItem('access_token');

		return !!authToken;
	}
}
