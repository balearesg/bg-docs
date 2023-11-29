import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { IconButton } from 'pragmate-ui/icons';
import { Client } from './options/client';
import { ContextMenu } from './context';
import { ScrollContainer } from 'pragmate-ui/perfect-scrollbar';

type props = {
	open: boolean;
	menu: any;
};

export /*bundle*/
function AppMenu(props: props) {
	const { open, menu } = props;
	const [subMenu, setSubMenu] = React.useState([]);
	const submenu = React.useRef<HTMLUListElement>(null);
	const container = React.useRef<HTMLDivElement>(null);
	const cls: string = `app-menu rtl-ps-none sidebar-left ps${open ? ' open' : ''}`;

	React.useEffect(() => {
		const ele: HTMLDivElement = container.current;

		const handleOver = event => {
			let { target } = event;
			target = target.nodeName.toLowerCase() !== 'li' ? target.closest('li') : target;

			if (!target) return;

			if (target.classList.contains('tab-sub-container') || submenu.current.contains(target)) return;

			if (!target.dataset.children) {
				submenu.current.classList.add('hide');
				setSubMenu([]);
				return;
			}

			const child = JSON.parse(target.dataset.children);
			setSubMenu(child);
			submenu.current.classList.remove('hide');
		};

		const handleLeave = () => submenu.current.classList.add('hide');
		ele.addEventListener('mouseover', handleOver);
		ele.addEventListener('mouseleave', handleLeave);
		return () => {
			ele.removeEventListener('mouseover', handleOver);
			ele.removeEventListener('mouseleave', handleLeave);
		};
	}, []);

	const navigate = (event: React.SyntheticEvent<HTMLLIElement, Event>): void => {
		event.preventDefault();
		const target: EventTarget & HTMLLIElement = event.currentTarget as EventTarget & HTMLLIElement;
		const page: string = target.dataset.navigate;
		if (!page) return;
		routing.pushState(page);
	};
	const value = { navigate };

	const output =
		!!subMenu.length &&
		subMenu.map(option => {
			return (
				<li data-navigate={option.path} key={option.id} className="list-sub-option" onClick={navigate}>
					<a className="a-sub-option">
						<IconButton className="sub-icon" icon={option.icon} />
						<span>{option.name}</span>
					</a>
				</li>
			);
		});

	return (
		<ContextMenu.Provider value={value}>
			<div ref={container}>
				<ScrollContainer className={cls} data-perfect-scrollbar="" data-suppress-scroll-x="true">
					<ul className="navigation-left">
						<Client menu={menu} />
					</ul>

					<div className="ps__rail-x">
						<div className="ps__thumb-x" tabIndex={0} />
					</div>
					<div className="ps__rail-y">
						<div className=" ps__thumb-y" tabIndex={0} />
					</div>
				</ScrollContainer>
				<ul ref={submenu} className="tab-sub-container hide">
					{output}
				</ul>
			</div>
		</ContextMenu.Provider>
	);
}
