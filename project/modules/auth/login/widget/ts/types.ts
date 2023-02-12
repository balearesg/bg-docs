export interface texts {
    password: string;
    email: string;
    login: string;
    error: string;
    forgetPassword: string;
    success_recoverPassword: string;
    notRegister: string;
    noSession: string;
    init: string;
    remember: string
};
export interface IForm {
    disabled?: boolean;
}

export interface init {
    email: string;
    password: string;
    isRemember: boolean
}

export type fetched = {
    fetching: boolean;
    ready: boolean;
};