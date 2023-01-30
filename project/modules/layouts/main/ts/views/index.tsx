import * as React from "react";
import { SidebarHeader } from "@bg/docs/menu";
import { TitleDoc } from "./title-doc";
import { Item } from "./item";
import config from "@bg/docs/config";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "beyond-layout-children": any;
        }
    }
}
export /*bundle*/
    function Layout() {
    const { sidebarItems } = config.params;
    const output = sidebarItems.map((item, index) => (
        <Item item={item} key={index} />
    ) )
    return (
        <SidebarHeader items={output} logo={<TitleDoc />}>
            <beyond-layout-children />
        </SidebarHeader>
    );
}
