import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = environment.api;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    login(email: string, password: string): Observable<string> {
        return this.http.post<any>(AUTH_API + '/users/login', { email, password })
            .pipe(
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
    
        if (removeToken == null) {
            this.router.navigate(['/']);
        }
    }

    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    get isLoggedIn(): boolean {
        const authToken = localStorage.getItem('access_token');

        return authToken !== null ? true : false;
    }
}
