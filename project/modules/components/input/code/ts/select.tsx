import React, { SelectHTMLAttributes } from 'react';
import { AppIcon } from '@bg/docs/app-icon';

type option = {
	label: string;
	value: any;
};

interface props extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	options: option[];
}
export /*bundle*/ function Select(props: props): JSX.Element {
	const { label, options, className } = props;
	const output: JSX.Element[] = options.map(
		(item: option): JSX.Element => (
			<option key={item.value} value={item.value}>
				{item.label}
			</option>
		)
	);
	const cls: string = `${className ?? 'form-group-select'}`;
	const properties = Object.assign({}, props);
	delete properties.className;
	delete properties.label;
	delete properties.name;
	return (
		<div className={cls}>
			<label>{label}</label>
			<select className="select" title={label} {...properties} id={props.name}>
				<option>{label}</option>
				{output}
			</select>
			<AppIcon icon="down" />
		</div>
	);
}
