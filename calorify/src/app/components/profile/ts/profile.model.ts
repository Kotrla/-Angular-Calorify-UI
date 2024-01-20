import { FormControl } from '@angular/forms';

export enum ProfileStoreKey {
    IS_LOADING = 'isLoading',
    USERDATA = 'userData'
}

export interface IUser {
  personal: {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    goal: string;
    date: string;
  };
  credentials: {
    email: string;
    password: string;
  };
  stats: {
    weight: number;
    height: number;
  };
  needs: {
    protein: number;
    carbs: number;
    fats: number;
    kcal: number;
  };
}

export interface IUserForm {
    firstName: FormControl;
    lastName: FormControl;
    age: FormControl;
    gender: FormControl;
    goal: FormControl;
    date: FormControl;
    email: FormControl;
    password: FormControl;
    weight: FormControl;
    height: FormControl;
    protein: FormControl;
    carbs: FormControl;
    fats: FormControl;
    kcal: FormControl;
}
