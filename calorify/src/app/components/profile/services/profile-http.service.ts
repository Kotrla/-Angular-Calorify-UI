import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.api;
@Injectable({
  providedIn: 'root'
})
export class ProfileHttpService {

    constructor(private http: HttpClient) { }

    getUserData(): Observable<any> {
        const getUserData = API + '/users';

        return this.http.get<any>(getUserData);
    }

    updateUserData(userData: any): Observable<any> {
        const updateUserData = API + '/users/update';

        return this.http.put<any>(updateUserData, userData);
    }

    updateUserMacros(userMacros: any): Observable<any> {
        const updateUserMacros = API + '/users/updateMacros';

        return this.http.put<any>(updateUserMacros, userMacros);
    }
}
