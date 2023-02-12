import { PageReactWidgetController } from '@beyond-js/react-widgets/page';
import { Page } from './views';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { Model } from './model';

export /*bundle*/
class Controller extends PageReactWidgetController {
	get Widget() {
		return Page;
	}

	#model;

	createStore(): IWidgetStore {
		this.#model = new Model();
		return this.#model;
	};
}
