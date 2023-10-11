import * as React from 'react';
import { SidebarHeader } from '@bg/docs/menu';
import { TitleDoc } from './title-doc';
import { Item } from './item';
import { SubItem } from './sub-item';
import { URI, routing } from '@beyond-js/kernel/routing';
import { sidebarItems } from '../menu';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}
export /*bundle*/
function Layout(): JSX.Element {

	const user = JSON.parse(localStorage.getItem('session-jadmin'));
	const uri = new URI('/auth/login');
	if (!user) routing.redirect(uri);

	const output = sidebarItems.map((item, index: number) => {
		if (!!item[2].length) return <SubItem key={index} item={item} />;
		return <Item item={item} key={index} />;
	});

	return (
		<div className="main-layout">
			<SidebarHeader items={output} logo={<TitleDoc />}>
				<beyond-layout-children />
			</SidebarHeader>
		</div>
	);
}
