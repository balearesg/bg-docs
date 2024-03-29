import React from 'react';
import { ScrollContainer } from 'pragmate-ui/perfect-scrollbar';
import { Spinner } from 'pragmate-ui/components';
import { Pager } from './pager';
import { Search } from './search';
import { useJViewContext } from './context';
import { Rows } from './rows';
export function View(): JSX.Element {
	const { header, additionalElement, state, title, search, props, scroll, fetching, animation } = useJViewContext();
	const Header: any = header;
	const AdditionalElement: any = additionalElement;
	let cls: string = state.controller.fetching || fetching ? 'jview-component is-fetching' : 'jview-component';
	cls += ` ${animation && 'animate__animated animate__fadeInUp'}`;
	const Component = scroll ? ScrollContainer : 'div';
	return (
		<Component data-perfect-scrollbar='' data-suppress-scroll-x='true' className='perfect-scrollbar-view'>
			<div className={cls}>
				{title && <h3 className='jida-table-title'>{title}</h3>}
				<div className='jview-component__header__content-search'>
					{AdditionalElement && <AdditionalElement {...props} />}
					{search && <Search />}
				</div>

				<div className='jview-component__header'>{header && <Header {...props} />}</div>
				<Rows />
				<Pager />
				{
					<div className='jview-fetching'>
						<Spinner className='jview-loading' color='var(--primary)' />
					</div>
				}
			</div>
		</Component>
	);
}
