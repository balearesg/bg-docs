import React from 'react';
import { routing } from '@beyond-js/kernel/routing';

export function TitleDoc(): JSX.Element {
	function goHome(event) {
		event.preventDefault();
		routing.pushState('/');
	}

	return (
		<h1>
			<a onClick={goHome}>
				BG <span className="badge">Docs</span>
			</a>
		</h1>
	);
}
