import * as React from 'react';
import { SidebarHeader } from '@bg/docs/menu';
import { TitleDoc } from './title-doc';
import { Item } from './item';
import config from '@bg/docs/config';
import { SubItem } from './sub-item';
import { useTexts } from '@bg/docs/hooks';
import { module } from "beyond_context";

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
	// const [ready, texts] = useTexts(module.specifier);
	// console.log("🚀 ~ file: index.tsx:21 ~ Layout ~ texts", texts)
	const output = sidebarItems.map((item, index: number) => {
		if (!!item.children) return <SubItem key={index} item={item} />;
		return <Item item={item} key={index} />;
	});
	//if (!ready) return;
	return (
		<SidebarHeader items={output} logo={<TitleDoc title={"title"} />}>
			<beyond-layout-children />
		</SidebarHeader>
	);
}
