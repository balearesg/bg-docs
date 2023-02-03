import * as React from "react";
import { Link } from "./link";
import { useTexts } from '@bg/docs/hooks';
interface ISpecs {
    items: string[];
}

const Item = ({ href, texts }) => {
    const identifier = `/docs/${href}`;
    return (
        <li>
            <Link href={identifier}>{texts[identifier]}</Link>
        </li>
    );
};

export /*bundle*/ function NextLinks({ items }: ISpecs) {
    const [ready, texts] = useTexts("@bg/docs/layout/main");
    if (!ready) return null;
    const output = items.map((href, i) => <Item texts={texts} key={`${href}.${i}`} href={href} />);
    // items
    return (
        <div className="next__content link__content">
            <ul>{output}</ul>
        </div>
    );
}
