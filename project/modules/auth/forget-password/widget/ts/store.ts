import { ReactiveModel } from '@bg/docs/reactive-model';
import { routing } from '@beyond-js/kernel/routing';
import { session } from '@bg/auth-api/wrapper.ts';
import config from '@bg/docs/config';

export class StoreManager extends ReactiveModel<StoreManager> {
	#error: boolean;
	get error() {
		return this.#error;
	}

	#success: boolean;
	get success() {
		return this.#success;
	}

	send = async (params, hide): Promise<void> => {
		this.fetching = true;
		this.triggerEvent();
		try {
			const response = await session.recoverPassword({ ...params, appToken: config.params.application.token });
			console.log(response);
			if (response.error) throw new Error(response.error.message);
			localStorage.setItem('__temp', params.email);
			routing.pushState(`/auth/code/${response.token}?forget=true`);
			hide();
			this.#success = true;
		} catch (error) {
			this.#error = true;
			console.error(error);
		} finally {
			this.fetching = false;
			this.triggerEvent();
		}
	};

	hide = () => this.triggerEvent('hide');
}
