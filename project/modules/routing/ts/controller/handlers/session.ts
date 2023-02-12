import { session } from '@bg/auth-api/entities.ts';

export function SessionHandler(parent: any): void {
	'use strict';

	const noSession: Array<string> = ['/auth/login', '/auth/forget/password', '/auth/code', '/auth/set-forgotten-password'];

	parent.session = async (): Promise<{ pathname: any }> => {
		const pathname: { pathname: any } = { pathname: '/auth/login' };
		const isSessionActive: boolean = session.isLogged;
		const existPath: string = noSession.find((route) => parent.pathname.indexOf(route) >= 0);

		if (isSessionActive) {
			if (existPath) return { pathname: '/' };
			return { pathname: parent.pathname };
		}

		if (!isSessionActive && !existPath) return pathname;
		if (isSessionActive && existPath) return { pathname: '/' };
		if (isSessionActive) return { pathname: parent.pathname };
	};
}
