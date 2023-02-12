import * as React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "beyond-layout-children": any;
        }
    }
}

export function Layout(): JSX.Element {
    const themeStorage = localStorage.getItem("theme");
    
    React.useEffect(() => {
        if (!themeStorage) return;
        const container = document.querySelector("html");
        container.setAttribute("data-beyond-mode", themeStorage);
        const body = document.querySelector("body");
        body.setAttribute("data-beyond-mode", themeStorage);
    }, []);

    return (
        <main className="layout-login">
            <beyond-layout-children/>
        </main>
    );
}