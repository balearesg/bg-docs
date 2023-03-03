import React from 'react';
import { session, IUser } from '@bg/auth-api/wrapper.ts';
import { UserImage } from './user-img';
import { useBinder } from '@jadmin/ui/hooks';

export function User(): JSX.Element {
	const [user, setUser] = React.useState({} as IUser);
	const email = session.isLogged && user.email && user.email.split('@')[0];

	useBinder([session], () => setUser(session.user), 'user-changed');

	return (
		<div className="content-user">
			<UserImage />

			<div className="user-info">
				<strong>{user.fullNames}</strong>
				<span>{email}</span>
			</div>
		</div>
	);
}
