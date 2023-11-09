import React from 'react';
import { session, IUser } from '@bg/auth-api/wrapper.ts';
import { UserImage } from './user-img';
import { useBinder } from '@jadmin/ui/hooks';
import { Spinner } from 'pragmate-ui/components';
import { UserInfo } from './info';

export function User(): JSX.Element {
	const [user, setUser] = React.useState(session.user);
	const [fetching, setFetching] = React.useState(session.fetching);
	const email = session.isLogged && user.email && user.email.split('@')[0];

	useBinder([session], () => setUser(session.user), 'user-changed');
	useBinder([session], () => setFetching(session.fetching), 'user.loading');

	const output = fetching ? <Spinner active /> : <UserInfo fullNames={user.fullNames} email={email} />;

	return (
		<div className='content-user'>
			<UserImage />
			{output}
		</div>
	);
}
