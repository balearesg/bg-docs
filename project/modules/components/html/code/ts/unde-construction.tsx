import * as React from 'react';
import { useTexts, DocsContext } from '@beyond/docs/store';
import { module } from 'beyond_context';
import { BeyondIsotype } from '@beyond/docs/preload';

export /*bundle*/ function UnderConstruction() {
	const [ready, texts] = useTexts('@beyond/docs/under-construction');
	if (!ready) return null;
	return (
		<div className="container-404">
			<div className="content-container two-columns">
				<header>
					<span className="pretitle-h1">{texts.pretitle}</span>
					<h1>{texts.title}</h1>
					<p>{texts.description}</p>
				</header>
				<div className="isotype-404 ">
					<BeyondIsotype />
				</div>
			</div>
		</div>
	);
}
