import React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { Item } from './item';

export function SubItem({ item }): JSX.Element {
	const [isOpen, setIsOpen] = React.useState(false);
	const children = item.children.map((subItem) => <Item item={subItem} />);

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	const navigate = (event: React.SyntheticEvent<HTMLLIElement, Event>) => {
		toggleOpen();
		const { dataset }: EventTarget & HTMLLIElement = event.currentTarget;
		const url = `${dataset.path}${dataset.sub ?? ''}`;
		routing.pushState(url);
	};

	return (
		<>
			<li onClick={navigate} data-sub={item.subPath} data-path={item.path}>
				{item.label}
			</li>

			{isOpen && children}
		</>
	);
}
