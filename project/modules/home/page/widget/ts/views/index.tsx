import * as React from 'react';
import * as Contents from '@bg/docs/contents';
import { useTexts } from '@bg/docs/hooks';
import { module } from 'beyond_context';
import { Home } from './home';
const DEFAULT_CONTENT = 'Home';

export /*bundle*/
function View({ uri }) {
	const content = uri.vars.get('content');
	const contentId = !content ? DEFAULT_CONTENT : content;

	if (!content) {
		return (
			<div className="page__container">
				<Home />
			</div>
		);
	}
	// const [ready, texts] = useTexts(module.specifier);
	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	const Content = Contents[name] || Contents[DEFAULT_CONTENT];

	return (
		<div className="page__container">
			<Content />
		</div>
	);
}
