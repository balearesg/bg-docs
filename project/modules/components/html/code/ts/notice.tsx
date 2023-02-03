import * as React from 'react';
import {Link} from "@beyond/ui/link";

export /*bundle*/ function Notice({text, link: [href, link]}) {
    return (
        <div className="block__note">
            {text} <Link href={href}>{link}</Link>
        </div>
    )
}
