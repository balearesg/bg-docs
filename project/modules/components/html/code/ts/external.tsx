import * as React from "react";

interface Iprops {
    href: "string";
    children?: JSX.Element;
}

interface IAttrs {
    onClick?: () => void;
}

export /*bundle*/
function ELink(props) {
    const { href } = props;
    return (
        <a href={href} target="_blank" {...props} data-algo="algo">
            {props.children}
        </a>
    );
}
