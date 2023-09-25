import React, { SyntheticEvent, useState, useEffect } from 'react';
import { BeyondIconButton } from '@bgroup/ui/icons';
import { Dates } from './dates';
import { useJViewContext } from './context';

export function Search(): JSX.Element {
	type init = {
		search: string;
		startDate: string;
		endDate: string;
	};
	const { handleSearch, handleClear, date, initValues, isSearch } = useJViewContext();
	const init: init = Object.assign(
		{
			search: '',
			startDate: '',
			endDate: '',
		},
		initValues ?? {}
	);

	const [values, setValues] = useState(init);
	const [error, setError] = useState<any>({});
	const handleChange = event => {
		const { name, value } = event.currentTarget;
		setValues({ ...values, [name]: value });
	};
	const { search, startDate, endDate } = values;
	const clearSearch = () => {
		const specs: any = {};
		Object.keys(init).forEach(item => {
			specs[item] = '';
		});
		setValues({ ...specs });
		setError({});
		handleClear && handleClear();
	};
	useEffect(() => {
		return () => {
			setValues({ ...init });
		};
	}, []);

	const handleSubmit = (event: SyntheticEvent<HTMLFormElement, Event>): void => {
		event.preventDefault();
		if (!search) return;
		const firstDate: number = new Date(startDate).getTime();
		const finallyDate: number = new Date(endDate).getTime();
		if (firstDate > finallyDate && date) {
			setError({
				date: 'La fecha de inicio no puede ser mayor a la fecha de fin',
			});
			return;
		}
		if (date) handleSearch && handleSearch(event, search.trim(), values);
		else handleSearch && handleSearch(event, search.trim());
	};
	type disabled = {
		disabled?: boolean;
	};
	const disabled: disabled = {};
	if (!search) disabled.disabled = true;

	const cls: string = date ? 'date form-group-jview' : 'form-group-jview';
	return (
		<form onSubmit={handleSubmit} className={cls}>
			{date && <Dates values={values} error={error} handleChange={handleChange} />}
			<div id="search-box">
				<div id="search-form">
					<input
						id="search-text"
						type="search"
						className="form-field"
						name="search"
						autoComplete="off"
						value={values.search}
						placeholder="Buscar"
						onChange={handleChange}
					/>
					{(search || isSearch) && (
						<BeyondIconButton icon="close" className={date && 'date'} onClick={clearSearch} />
					)}
					<button id="search-button" type="submit">
						<span>Buscar</span>
					</button>
				</div>
			</div>
		</form>
	);
}
