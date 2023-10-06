import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IExercise } from '../ts/models/workout.model';

const API = environment.api + '/workout';

@Injectable({
    providedIn: 'root'
})
export class WorkoutsHttpService {

    constructor(private http: HttpClient) { }

    getDailyWorkouts(): Observable<any> {
        const getDailyWorkoutsUrl = API + '/';

        return this.http.get<any>(getDailyWorkoutsUrl);
    }

    getAllWorkouts(): Observable<any> {
        const getAllWorkoutsUrl = API + '/all/';

        return this.http.get<any>(getAllWorkoutsUrl);
    }

    addExercise(exercise: IExercise): Observable<any> {
        const addExerciseUrl = API + '/';

        return this.http.post<any>(addExerciseUrl, { ...exercise });
    }
}
