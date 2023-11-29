import { ReactiveModel } from '@beyond-js/reactive/model';

export class Model extends ReactiveModel<{}> {
    #count: number = 0;
    get count() {
        return this.#count
    }
    set count(value) {
        this.#count = value;
        this.triggerEvent("hide")
    }
    hide = () => {
        this.#count = this.#count + 1
        this.triggerEvent("hide")
    }

}