export enum LoginFormMode {
	LOGIN = 'login',
	REGISTER = 'register',
}

export interface ILoginForm {
	email: string;
	password: string;
}
