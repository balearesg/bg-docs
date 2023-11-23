import React, { MutableRefObject } from 'react';
import { IconButton } from 'pragmate-ui/icons';
import { ScrollContainer } from 'pragmate-ui/perfect-scrollbar';
interface Props extends Partial<HTMLElement> {
	logo?: JSX.Element;
	onChange?: (isOpen: boolean) => void;
	setIsOpen: any;
	isOpen: boolean;
	items: any;
}

export function DropdownSidebar(props: Props): JSX.Element {
	const { onChange, items, logo, setIsOpen, isOpen } = props;
	const sidebarRef: MutableRefObject<HTMLElement> = React.useRef<HTMLElement>(null);
	const cls: string = isOpen ? 'sidebar open' : 'sidebar closed';
	const title: string = isOpen ? 'close' : 'open';

	function toggleIsOpen(): void {
		setIsOpen(!isOpen);
		if (onChange) onChange(isOpen);
	}

	return (
		<aside ref={sidebarRef} className={cls}>
			<div className='sidebar__header'>
				{logo && <div className='logo'>{logo}</div>}
				<IconButton title={title} onClick={toggleIsOpen} icon='chevronRight' className='toggle__btn' />
			</div>
			<ScrollContainer className='sidebar__nav'>
				<p className='documentation-subtitle'>DOCUMENTATION</p>
				<ul className='sidebar__list'>{items}</ul>
			</ScrollContainer>
		</aside>
	);
}
