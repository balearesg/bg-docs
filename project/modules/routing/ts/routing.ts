import { routing } from '@beyond-js/kernel/routing';
import { RoutingAppController } from './controller/controller';

const data: Map<any, any> = new Map();

routing.redirect = async function redirect(uri): Promise<string> {
	const control: RoutingAppController = new RoutingAppController(uri.pathname, data);
	const response: { pathname: any } = await control.load();
	return response.pathname;
};
