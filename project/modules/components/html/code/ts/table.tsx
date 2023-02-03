import * as React from "react";
export /*bundle */ function Table({ titles, field }) {
    const outputTitles = titles.map((item) => <th key={item}>{item}</th>);

    const output = titles.map((row) => {
        const columns = row.map((item) => <td key={item}>{item}</td>);
        return <tr key={row[0]}>{columns}</tr>;
    });

    return (
        <table>
            <thead>
                <tr>{outputTitles}</tr>
            </thead>
            <tbody>{output}</tbody>
        </table>
    );
}
