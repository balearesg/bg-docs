import React from 'react';
import { Input } from 'pragmate-ui/form';
import { getCurrentDate } from '@jadmin/ui/utils';

export function Dates({ values, error, handleChange }): JSX.Element {
	return (
		<div className='container-date'>
			<Input
				type='date'
				className='form-control'
				value={values.startDate}
				name='startDate'
				max={getCurrentDate()}
				hasError={!!error?.date}
				errorMessage={error?.date}
				label='Desde'
				onChange={handleChange}
			/>

			<Input
				type='date'
				className='form-control form-control-end'
				value={values.endDate}
				max={getCurrentDate()}
				hasError={!!error?.date}
				label='hasta'
				errorMessage={error?.date}
				onChange={handleChange}
				name='endDate'
			/>
		</div>
	);
}
