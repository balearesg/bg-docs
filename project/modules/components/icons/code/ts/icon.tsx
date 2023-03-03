import React, { SVGAttributes } from 'react';
import { BeyondIcon } from '@bgroup/ui/icons';
import { APP_ICONS } from './icons';

interface props {
	title?: string;
	icon?: any;
	className?: SVGAttributes<SVGSVGElement>['className'];
	viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
}

export /*bundle*/ const AppIcon = (props: props): JSX.Element => {
	const icons: Object = APP_ICONS;

	const { icon } = props;
	const attrs: props = Object.assign({}, props);
	delete attrs.icon;

	if (!icons.hasOwnProperty(icon)) {
		attrs.icon = icon;
	} else {
		attrs.icon = icons[icon].icon;
		attrs.viewBox = icons[icon].viewBox;
	}

	return <BeyondIcon {...attrs} />;
};
