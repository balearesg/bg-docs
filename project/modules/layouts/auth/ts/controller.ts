import { ReactWidgetController } from '@beyond-js/react-widgets/base';
import { Layout } from './view/layout';

export /*bundle*/
class Controller extends ReactWidgetController {
	get Widget(): () => JSX.Element {
		return Layout;
	}
}
