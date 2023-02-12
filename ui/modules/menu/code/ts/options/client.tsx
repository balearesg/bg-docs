import * as React from "react";
import {Item} from "./item";

export function Client({menu}): JSX.Element {
    const output: Array<JSX.Element> = menu.map((item) => {
        return <Item key={item.id} item={item}/>;
    });

    return <>{output}</>;
}
