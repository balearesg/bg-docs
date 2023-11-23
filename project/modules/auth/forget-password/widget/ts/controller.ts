import { PageReactWidgetController } from '@beyond-js/react-widgets/page';
import { StoreManager } from './store';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { View } from './views';

export /*bundle*/
class Controller extends PageReactWidgetController {
	#store: StoreManager;
	createStore() {
		this.#store = new StoreManager();
		return this.#store;
	}
	get Widget() {
		return View;
	}

	/**
	 * this method is executed when the widget is showd
	 */
	show() {}

	/**
	 * this method is executed when the widget is hidden
	 */
	hide() {
		return this.#store.hide();
	}
}
