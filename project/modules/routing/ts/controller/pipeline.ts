import { SessionHandler } from './handlers/session';

export class PipeLine {
	#pathname;
	get pathname() {
		return this.#parent?.pathname;
	}

	#data;
	get data() {
		return this.#parent?.data;
	}

	#parent;

	constructor(parent) {
		this.#parent = parent;
		new SessionHandler(this);
	}

	define = async (): Promise<{ pathname: any }> => {
		let pathname: { pathname: any } = { pathname: this.#parent.pathname };

		for (let handler of this.#parent.handlers) {
			if (this[handler] === undefined) continue;

			let response = await this[handler]();
			if (response && typeof response === 'object') {
				pathname = response;
				break;
			}
		}
		return pathname;
	};
}
