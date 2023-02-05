import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";
interface Iprops {
    href: "string";
    children?: JSX.Element;
}

interface IAttrs {
    onClick?: () => void;
}

export /*bundle*/
function Link(props) {
  
    return (
        <a  href={props.href} target="_blank" className="link">
            {props.children}
        </a>
    );
}
