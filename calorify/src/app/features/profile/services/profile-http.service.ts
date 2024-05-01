import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserResponse } from '../ts/profile.model';
import { environment } from 'src/environments/environment';

const API = environment.api;
@Injectable({
	providedIn: 'root',
})
export class ProfileHttpService {
	constructor(private http: HttpClient) {}

	getUserData(): Observable<IUserResponse> {
		const getUserData = API + '/users';

		return this.http.get<IUserResponse>(getUserData);
	}

	updateUserData(userData: IUser): Observable<IUserResponse> {
		const updateUserData = API + '/users/update';

		return this.http.put<IUserResponse>(updateUserData, userData);
	}

	updateUserMacros(userMacros: any): Observable<any> {
		const updateUserMacros = API + '/users/updateMacros';

		return this.http.put<any>(updateUserMacros, userMacros);
	}
}
