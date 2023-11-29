import * as React from 'react';
import { useContext } from 'react';
import { ContextMenu } from '../context';
import { IconButton } from 'pragmate-ui/icons';

export function Item({ item }): JSX.Element {
	const { navigate } = useContext(ContextMenu);

	return (
		<li
			onClick={navigate}
			className='nav-item'
			data-navigate={item.path}
			data-children={!!item.submenu.length ? JSON.stringify(item.submenu) : ''}
		>
			<IconButton
				icon={item.icon}
				data-children={!!item.submenu.length ? JSON.stringify(item.submenu) : ''}
				className={item.icon}
			/>
			<span data-children={!!item.submenu.length ? JSON.stringify(item.submenu) : ''}>{item.name}</span>
		</li>
	);
}
