export interface texts {
	email: string;
	title: string;
	error: string;
	success: string;
	userRegister: string;
	send: string;
	subtitle: string;
	verify: string;
}

export interface IForm {
	disabled?: boolean;
}

export interface init {
	email: string;
}

export type fetched = {
	fetching: boolean;
	ready: boolean;
};
