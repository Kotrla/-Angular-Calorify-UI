import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../ts/models/user.model';
import { IUserResponse } from '../ts/models/user-response.model';
import { IUserTargetsResponse } from '../ts/models/targets-response.model';
import { IDailyResponse } from '../ts/models/daily-response.model';

const API = environment.api;

@Injectable({
    providedIn: 'root'
})
export class HomeHttpService {

    constructor(
    private http: HttpClient
    ) { }

    getUserDetails(): Observable<IUserResponse> {
        const getUserUrl = API + '/users/';

        return this.http.get<IUserResponse>(getUserUrl);
    }

    getUserTargets(): Observable<IUserTargetsResponse> {
        const getUserTargetsUrl = API + '/target/';

        return this.http.get<IUserTargetsResponse>(getUserTargetsUrl);
    }

    getUserDaily(): Observable<IDailyResponse> {
        const getUserDailyUrl = API + '/target/daily';

        return this.http.get<IDailyResponse>(getUserDailyUrl);
    }
}
