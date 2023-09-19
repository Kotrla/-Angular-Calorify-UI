export interface IUser {
  personal: {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    goal: string;
    date: string;
  }
  credentials: {
    email: string;
    password: string;
  }
  stats: {
    weight: number;
    height: number;
  }
  needs: {
    protein: number;
    carbs: number;
    fats: number;
    kcal: number;
  }
}