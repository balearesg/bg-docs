import React, {
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
	PropsWithChildren,
	SyntheticEvent,
	SVGAttributes,
	ButtonHTMLAttributes,
	ReactNode,
	Ref,
} from 'react';
import { BeyondIconButton } from '@bgroup/ui/icons';
import { APP_ICONS } from './icons';
interface props {
	icon?: string;
	onClick?: (e: SyntheticEvent<Element, Event>) => void;
	viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
	disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
	name?: ButtonHTMLAttributes<HTMLButtonElement>['name'];
	value?: ButtonHTMLAttributes<HTMLButtonElement>['value'];
	id?: string;
	title?: string;
	children?: ReactNode;
	tippy?: string | object;
	navigate?: string;
	className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export /*bundle*/ const AppIconButton: ForwardRefExoticComponent<
	PropsWithChildren<props> & RefAttributes<unknown>
> = forwardRef((props: props, ref: Ref<HTMLButtonElement>): JSX.Element => {
	const icons = APP_ICONS;

	const { icon } = props;
	const attrs: props = Object.assign({}, props);
	delete attrs.icon;

	if (!icons.hasOwnProperty(icon)) {
		attrs.icon = icon;
	} else {
		attrs.icon = icons[icon].icon;
		attrs.viewBox = icons[icon].viewBox;
	}

	return <BeyondIconButton ref={ref} {...attrs} />;
});
