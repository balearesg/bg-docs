import * as React from 'react';
import * as Contents from '@bg/docs/contents';
import { useTexts } from '@bg/docs/hooks';
import { module } from "beyond_context";
const DEFAULT_CONTENT = 'NotFound';

export /*bundle*/
function View({ uri }) {
	const content = uri.vars.get('content');
	const contentId = !content ? DEFAULT_CONTENT : content;
	// const [ready, texts] = useTexts(module.specifier);
	// console.log("🚀 ~ file: index.tsx:12 ~ View ~ texts", texts)
	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const name = contentId.split('-').map(replace).join('');

	const Content = Contents[name] || Contents[DEFAULT_CONTENT];

	return (
		<div className="page__container">
			<Content />
		</div>
	);
}
