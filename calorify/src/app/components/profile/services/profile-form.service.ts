import { Injectable } from '@angular/core';
import { IUser, IUserForm } from '../ts/profile.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISelectData } from 'src/app/ts/models/select-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileFormService {

    constructor(
        private formBuilder: FormBuilder
    ) { }

  buildUserDataForm(userData: IUser): FormGroup<IUserForm> {
    const { personal, credentials, stats, needs } = userData;
    const { weight, height } = stats;
    const { email, password } = credentials;
    const { kcal, carbs, protein, fats } = needs;
    const { firstName, lastName, age, gender, goal, date } = personal;

    return this.formBuilder.group({
        firstName: [ firstName, [ Validators.maxLength(14), Validators.required ] ],
        lastName: [ lastName, [ Validators.maxLength(14), Validators.required ] ],
        age: [ age, [ Validators.required, Validators.min(0) ] ],
        gender: [ gender, [ Validators.required ] ],
        goal: [ goal, [ Validators.required ] ],
        date: [ date, [ Validators.required ] ],
        email: [ email, [ Validators.maxLength(25), Validators.email, Validators.required ] ],
        password: [ password, [ Validators.maxLength(15), Validators.minLength(3), Validators.required ] ],
        weight: [ weight, [ Validators.required, Validators.min(0) ] ],
        height: [ height, [ Validators.required, Validators.min(0) ] ],
        protein: [ protein, [ Validators.required, Validators.min(0) ] ],
        carbs: [ carbs, [ Validators.required, Validators.min(0) ] ],
        fats: [ fats, [ Validators.required, Validators.min(0) ] ],
        kcal: [ kcal, [ Validators.required, Validators.min(0) ] ],
    });
  }

  getUserDataFromForm(userData: FormGroup<IUserForm>): IUser {
    const {
      firstName, lastName, age, gender, goal, date, email,
      password, weight, height, protein, carbs, fats, kcal
    } = userData.value;
    
    return {
      personal: { firstName, lastName, age, gender, goal, date },
      credentials: { email, password },
      stats: { weight, height },
      needs: { protein, carbs, fats, kcal }
    }
  }

  getGenderSelectData(): ISelectData[] {
    return [
      {
        value: "Male",
        uiValue: "Male",
      },
      {
        value: "Female",
        uiValue: "Female",
      }
    ]
  }

  getGoalSelectData(): ISelectData[] {
    return [
      {
        value: "Lose fat",
        uiValue: "Lose fat",
      },
      {
        value: "Maintain weight",
        uiValue: "Maintain weight",
      },
      {
        value: "Gain muscle",
        uiValue: "Gain muscle",
      }
    ]
  }
}
