import { getHandlers } from './get-handlers';
import { PipeLine } from './pipeline';

export class RoutingAppController {
	#isDefault;
	get isDefault(): boolean {
		return this.#pathname === '/';
	}

	#pathname;
	get pathname() {
		return this.#pathname;
	}

	#handlers: string[] = getHandlers(this.isDefault);
	get handlers(): string[] {
		return this.#handlers;
	}

	#data;
	get data(): any {
		return this.#data;
	}

	constructor(pathname, data) {
		this.#pathname = pathname;
		this.#data = data;
	}

	load = async (): Promise<{ pathname: any }> => {
		let pipeline: PipeLine = new PipeLine(this);
		return await pipeline.define();
	};
}
