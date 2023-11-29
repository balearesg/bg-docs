import React, { useRef, MutableRefObject, useEffect, useState } from 'react';
import { itemValidate } from '../../types';
import { AppIcon } from '@bg/docs/app-icon';

export default function Item({ item, validate }: itemValidate): JSX.Element {
	const ref: MutableRefObject<HTMLLIElement> = useRef<HTMLLIElement>(null);
	const [icon, setIcon] = useState<string>('circle');

	const regExp: RegExp = new RegExp(item.regExp);

	useEffect((): void => {
		if (regExp.test(validate)) {
			ref.current.classList.add('valid');
			setIcon('check');
			return;
		}
		ref.current.classList.remove('valid');
		if (icon !== 'circle') setIcon('circle');
	}, [validate]);

	return (
		<li ref={ref}>
			<AppIcon icon={icon} />
			{item.label}
		</li>
	);
}
