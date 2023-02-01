import * as React from "react";
import { useMenuContext } from "../context";
import { routing } from "@beyond-js/kernel/routing";
import { AppIcon } from "@beyond/docs/ui/icons";

interface IMenuItem {
    id: string;
    label: string;
    children?: Object[];
    link?: String;
}

interface IProps {
    items: IMenuItem[];
    className?: string;
}

export function List({ items, className }: IProps) {
    const output = items.map((item, i) => <MenuItem item={item} key={`${item.id}.${i}`} />);
    const cls = `docs__menu__sublist${className ? ` ${className}` : ""}`;
    return <ul className={cls}>{output}</ul>;
}

export function ParentItem({ item }) {
    const { texts, current } = useMenuContext();
    const onClick = (event) => {
        event.preventDefault();
        event.currentTarget.closest("li").classList.toggle("item--opened");
    };

    const label = texts[item.id] ?? item.id;
    const selected = item.children.find((item) => `/docs/${item.id}` === current.uri);
    const cls = `menu__item--parent${!!selected ? " item--opened" : ""}`;
    return (
        <li className={cls}>
            <section onClick={onClick}>
                <a href="">
                    <span>{label}</span>
                </a>
                <AppIcon icon="chevronRight" />
            </section>
            <List items={item.children} level={1} />
        </li>
    );
}

export function MenuItem({ item }) {
    const { close, texts, current } = useMenuContext();
    if (item.children) return <ParentItem item={item} />;

    const uri = `/docs/${item.id}`;
    const onClick = (event) => {
        event.preventDefault();
        const container = event.currentTarget.closest("aside");
        const target = event.currentTarget.closest("li");
        const currentActive = container.querySelector(".active-item");
        if (currentActive) currentActive.classList.remove("active-item");
        target.classList.add("active-item");

        routing.pushState(uri);
        close();
    };

    const cls = `${uri === current.uri ? "active-item" : ""}`;
    const link = `/docs/${item.id}`;

    const label = texts[link] ?? link;
    return (
        <li className={cls}>
            <a href={link} onClick={onClick}>
                {label}
            </a>
        </li>
    );
}
