import React from 'react';

export function UserInfo({ fullNames, email }: { fullNames: string; email: string }) {
	return (
		<div className="user-info">
			<strong>{fullNames}</strong>
			<span>{email}</span>
		</div>
	);
}
