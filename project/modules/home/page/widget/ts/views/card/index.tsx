import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";

interface ITypes {
    onClick?: React.MouseEventHandler<HTMLElement>;
}
interface IProps {
    href?: string;
    title?: string;
    children: React.ReactNode;
}
export function Card({ title, children, href }) {
    const attrs: ITypes = {};
    const onNavigate = () => {
        routing.pushState(href);
    };
    if (href) attrs.onClick = onNavigate;

    return (
        <section className="card" {...attrs}>
            <header>
                <h3>{title}</h3>
            </header>
            {children}
        </section>
    );
}
