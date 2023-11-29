import * as React from 'react';
import {Spinner} from 'pragmate-ui/spinner';
import {IconButton} from 'pragmate-ui/icons';

export function Children({children, spinner, actions, refresh}): JSX.Element {
	//0 or 1 child
	if (!children || (children && !children.length)) {
		return <>{children}</>;
	}
	let output: any = [];
	if (typeof children === 'object' && children.length) {
		children.map((item, index: number) => {
			if (!!spinner && parseInt(spinner) === index) {
				output.push(<Spinner type="primary" active key="spinner" />);
			}
			if (refresh && parseInt(spinner) === index) {
				if (!actions) console.warn('the action object must be passed to implement refresh button');
				output.push(<IconButton key="refresh" icon="refresh" onClick={actions?.refresh} />);
			}
			output.push(item);
		});
	}

	return output;
}
