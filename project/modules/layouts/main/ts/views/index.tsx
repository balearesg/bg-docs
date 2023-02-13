import * as React from 'react';
import { SidebarHeader } from '@bg/docs/menu';
import { TitleDoc } from './title-doc';
import { Item } from './item';
import config from '@bg/docs/config';
import { SubItem } from './sub-item';
import { URI, routing } from '@beyond-js/kernel/routing';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}
export /*bundle*/
function Layout(): JSX.Element {
	const { sidebarItems } = config.params;

	const user = JSON.parse(localStorage.getItem('session-jadmin'));
	// TODO
	const uri = new URI('/auth/login');
	if (!user) routing.redirect(uri);

	const output = sidebarItems.map((item, index: number) => {
		if (!!item.children) return <SubItem key={index} item={item} />;
		return <Item item={item} key={index} />;
	});
	//if (!ready) return;
	return (
		<div className="main-layout">
			<SidebarHeader items={output} logo={<TitleDoc />}>
				<beyond-layout-children />
			</SidebarHeader>
		</div>
	);
}
