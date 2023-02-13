import * as React from 'react';

interface IProps extends Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
	href: 'string';
	children?: any;
}

export /*bundle*/
function ELink(props: IProps) {
	const { href } = props;
	return (
		<a href={href} target="_blank" {...props} data-algo="algo">
			{props.children}
		</a>
	);
}
