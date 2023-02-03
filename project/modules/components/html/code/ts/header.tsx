import * as React from "react";
import { PreTitle } from "./pre-title";
import { Title } from "./title";
interface Props {
    children: string | number;
    title?: string;
    pretitle?: string;
}

export /*bundle*/ function DocHeader({ children, title, pretitle }: Props) {
    const output = [];
    if (pretitle) output.push(<PreTitle key="pretitle">{pretitle}</PreTitle>);
    if (title) output.push(<Title key="title">{title}</Title>);

    return (
        <header className="docs__header-container">
            {output}
            {children}
        </header>
    );
}
