import { ReactiveModel } from '@beyond-js/reactive/model';

export class Model extends ReactiveModel<{}> {
	hide = () => this.triggerEvent("hide")
}
