import * as React from "react";
type props = {
    title?: String;
    element?: React.ReactNode;
};
/**
 *
 * @param param element : Puede ser cualquier cosa.
 *
 * @returns
 */
export /*bundle*/ function Header({ title, element }: props): JSX.Element {
    return (
        <header className="jadmin-header">
            {title && (
                <h1 id="title" className="title">
                    {title}
                </h1>
            )}
            {element && element}
        </header>
    );
}
