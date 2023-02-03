import { string } from "prop-types";
import React from "react";
interface IProps {
    src: string;
    className?: string;
    name?: string;
}
interface IRef {
    ref: HTMLPictureElement | null;
}
export /*bundle*/ const SVGImage = React.forwardRef(({ src, className, name = "picture" }: IProps, ref) => {
    return (
        <picture
            ref={ref}
            className={className}
            data-name={name}
            dangerouslySetInnerHTML={{
                __html: src,
            }}
        ></picture>
    );
});
