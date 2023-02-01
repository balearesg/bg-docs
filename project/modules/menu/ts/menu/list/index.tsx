import * as React from "react";

interface IMenuItem {
    id: string;
    label: string;
    children?: Object[];
    link?: String;
}

interface IProps {
    items: IMenuItem[];
    className?: string;
    level?: number;
}

export function List({ items, className, level }: IProps) {
    const { MenuItem } = require("../items/index");
    const output = items.map((item, i) => <MenuItem item={item} key={`${item.id}.${i}`} />);
    const clsToApply = level ? "docs__menu__sublist" : "docs__menu__list";
    const cls = `${clsToApply}${className ? ` ${className}` : ""}`;

    return <ul className={cls}>{output}</ul>;
}
