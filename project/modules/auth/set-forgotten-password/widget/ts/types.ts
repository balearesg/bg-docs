type Title = {
	edit: string;
	create: string;
};

export interface texts {
	save: string;
	password: string;
	title: Title;
	error: string;
	repeatPassword: string;
	passwordError: string;
	successPassword: string;
	success_recoverPassword: string;
	information: string;
	lowercase: string;
	uppercase: string;
	number: string;
	specialCharacter: string;
	eightCharacters: string;
	newPassword: string;
}
export interface IForm {
	disabled?: boolean;
}

export interface init {
	repeatPassword: string;
	newPassword: string;
}

export type fetched = {
	ready: boolean;
	fetching: boolean;
};

export type itemValidate = {
	item: {
		label: string;
		regExp: string | RegExp;
	};
	validate: string;
};
