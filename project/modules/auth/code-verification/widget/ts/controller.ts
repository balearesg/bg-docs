import { PageReactWidgetController } from '@beyond-js/react-widgets/page';
import { View } from './views/view';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { Model } from './model';

export /*bundle*/
class Controller extends PageReactWidgetController {
	get Widget() {
		return View;
	};

	#model;

	createStore(): IWidgetStore {
		this.#model = new Model();
		return this.#model;
	};

	hide() {
		this.#model.hide()
	}
}
