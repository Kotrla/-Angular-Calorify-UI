import { IFood } from './food.model';

export interface IMeal {
  food: IFood[];
  user: string;
  protein: number;
  carbs: number;
  fats: number;
  kcal: number;
  meal: string;
  dateCreated: string;
}