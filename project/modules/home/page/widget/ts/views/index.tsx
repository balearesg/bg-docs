import * as React from 'react';
import * as Contents from '@bg/docs/contents/esp';

const DEFAULT_CONTENT = 'Example';

export /*bundle*/
function View({ uri }) {
	const content = uri.vars.get('content');
	// Here goes th default place
	const contentId = !content ? DEFAULT_CONTENT : content;

	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	// Here goes 404
	const Content = Contents[name] || Contents[DEFAULT_CONTENT];

	return (
		<div className="page__container">
			<Content />
		</div>
	);
}
