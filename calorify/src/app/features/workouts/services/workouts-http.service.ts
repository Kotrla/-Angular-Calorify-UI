import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAllWorkoutsResponse, IExercise, IWorkoutResponse } from '../ts/workouts.model';

const API = environment.api + '/workout';

@Injectable({
	providedIn: 'root',
})
export class WorkoutsHttpService {
	constructor(private http: HttpClient) {}

	getDailyWorkouts(): Observable<IWorkoutResponse> {
		const getDailyWorkoutsUrl = API + '/';

		return this.http.get<IWorkoutResponse>(getDailyWorkoutsUrl);
	}

	getAllWorkouts(): Observable<IAllWorkoutsResponse> {
		const getAllWorkoutsUrl = API + '/all/';

		return this.http.get<IAllWorkoutsResponse>(getAllWorkoutsUrl);
	}

	addExercise(exercise: IExercise): Observable<IWorkoutResponse> {
		const addExerciseUrl = API + '/';

		return this.http.post<IWorkoutResponse>(addExerciseUrl, exercise);
	}
}
