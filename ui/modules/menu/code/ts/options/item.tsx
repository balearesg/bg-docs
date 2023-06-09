import * as React from "react";
import { useContext } from "react";
import { ContextMenu } from '../context'
import { BeyondIcon } from "@bgroup/ui/icons";

export function Item({ item }): JSX.Element {

    const { navigate } = useContext(ContextMenu);

    return (
        <li
            onClick={navigate}
            className="nav-item"
            data-navigate={item.path}
            data-children={!!item.submenu.length ? JSON.stringify(item.submenu) : ""}
        >
            <BeyondIcon icon={item.icon} data-children={!!item.submenu.length ? JSON.stringify(item.submenu) : ""} className={item.icon} />
            <span data-children={!!item.submenu.length ? JSON.stringify(item.submenu) : ""}>{item.name}</span>
        </li>
    );
}
