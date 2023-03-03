import React from 'react';
import { session, IUser } from '@bg/auth-api/wrapper.ts';
import { UserImage } from './user-img';
import { useBinder } from '@jadmin/ui/hooks';
import { BeyondSpinner } from '@bgroup/ui/spinner';
import { UserInfo } from './info';

export function User(): JSX.Element {
	const [user, setUser] = React.useState(session.user);
	const [fetching, setFetching] = React.useState(session.fetching);
	const email = session.isLogged && user.email && user.email.split('@')[0];

	console.log('FETCHING => ', fetching);
	useBinder([session], () => setUser(session.user), 'user-changed');
	useBinder([session], () => setFetching(session.fetching), 'user.loading');

	const output = fetching ? (
		<BeyondSpinner />
	) : (
		<UserInfo fullNames={user.fullNames} email={email} />
	);

	return (
		<div className="content-user">
			<UserImage />
			{output}
		</div>
	);
}
