import { ReactiveModel } from '@bg/docs/reactive-model';
import { session } from '@bg/auth-api/wrapper.ts';
import config from '@bg/docs/config';
import { init } from './types';
export class Model extends ReactiveModel {
	#message: string;
	get message() {
		return this.#message;
	}

	#invalid: string | boolean;
	get invalid() {
		return this.#invalid;
	}

	#ready: boolean;
	get ready() {
		return this.#ready;
	}

	#error: boolean;
	get error() {
		return this.#error;
	}

	#fetching: boolean;
	get fetching() {
		return this.#fetching;
	}

	login = async (fields: init): Promise<void> => {
		this.#fetching = true;
		this.#error = false;
		this.triggerEvent();
		try {
			const appToken = config.params.application.token;
			console.log('APP TOKEN => ', appToken);
			const response = await session.login({ ...fields, appToken });
			if (response?.error) throw new Error(response.error);
		} catch (error) {
			this.#error = true;
		} finally {
			this.#fetching = false;
			this.triggerEvent();
		}
	};
}
