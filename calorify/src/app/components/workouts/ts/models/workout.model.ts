export interface IWorkout {
  exercises: IExercise[];
  user: string;
  dateCreated: string;
}

export interface IExercise {
  name: string;
  reps: number;
  load: number;
}