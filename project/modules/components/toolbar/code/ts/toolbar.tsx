import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { IconButton } from 'pragmate-ui/icons';
import { Children } from './children';

interface props {
	back?: boolean;
	backAction?: Function;
	fetching?: boolean;
	actions?: any;
	refresh?: boolean;
	className?: string;
	spinner?: boolean;
	onClick?: Function;
	title?: string;
}
export /*bundle*/ function BaseToolbar(props: React.PropsWithChildren<props>): JSX.Element {
	const { back, onClick } = props;

	function onBack(): void {
		if (!!props.backAction) props.backAction();
		else routing.back();
	}

	function handleOnClick() {
		console.log('cliock');
		onClick();
	}
	const { fetching, children, actions, refresh, title } = props;

	const disabled: { disabled?: boolean } = {};
	if (fetching) disabled.disabled = true;

	let className: string = 'base-element-toolbar';
	className += !!props.className ? ` ${props.className}` : '';
	className += back ? '' : ' no-back';
	const spinner: boolean = props.spinner ? props.spinner : false;

	return (
		<nav className={className} onClick={handleOnClick}>
			{back && <IconButton className='beyond-back-button circle' onClick={onBack} icon='backArrow' />}
			{title && <h3>{title}</h3>}
			<Children children={children} spinner={spinner} actions={actions} refresh={refresh} />
		</nav>
	);
}
