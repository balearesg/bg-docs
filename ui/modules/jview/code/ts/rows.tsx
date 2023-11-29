import React, { useMemo, useEffect } from 'react';
import { Empty } from 'pragmate-ui/empty';
import { useJViewContext } from './context';

export function Rows(): JSX.Element {
	const { total, rows, entries, current, state, rowProps, row, isSearch, setPages } = useJViewContext();
	useEffect(() => {
		if (total <= rows) setPages(1);
		else setPages(Math.ceil(total / rows));
	}, [total, rows]);
	let cropStart: number = current === 1 ? 0 : (current - 1) * rows;
	const pageEntries: any[] = state?.controller?.pager ? entries : entries.slice(cropStart, cropStart + rows);
	const Row: any = row;

	const output = useMemo(() => {
		const showedEntries = !!pageEntries.length ? pageEntries : entries;
		return showedEntries.map((item, i) => {
			return <Row item={item} index={i} key={`${i}-${current}`} {...rowProps} />;
		});
	}, [pageEntries]);
	const text: string = isSearch ? 'No hay elementos en tu busqueda' : 'No hay elementos para mostrar';

	return (
		<>{output.length ? <div className='card'>{output}</div> : <Empty text={text} icon='circle-exclamation' />}</>
	);
}
