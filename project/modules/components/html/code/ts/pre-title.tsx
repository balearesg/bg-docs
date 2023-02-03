import * as React from "react";

interface Props {
    children: string | number;
    type: string;
}

export /*bundle*/ function PreTitle({ children, type = "h1" }: Props) {
    return <span className={`pretitle-${type}`}>{children}</span>;
}
