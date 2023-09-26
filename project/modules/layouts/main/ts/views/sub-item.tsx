import React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { Item } from './item';

export function SubItem({ item }): JSX.Element {
	const [isOpen, setIsOpen] = React.useState(false);
	const children = item.children.map((subItem) => <Item item={subItem} />);

	const items = {
		label: item[0],
		path : item[1],
		subPath : item[2]
	}

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
			<li onClick={navigate} data-sub={items.subPath} data-path={items.path}>
				{items.label}
			</li>

			{isOpen && children}
		</>
	);
}
