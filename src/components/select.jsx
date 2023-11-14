import { useEffect } from "react";

/**
 *
 * @param {Object} props
 * @param {string} props.id
 * @param {Map} props.selection
 * @param {Function} props.action
 * @param {string} props.value
 * @returns
 */
export function Select({ id, selection, action, selected}) {
    console.log(selection);
    return (
        <select id={id} onChange={e => action(e.target.value)} value={selected}>
            {
                selection.sort(comparator).map(([v, k]) =>
                    <option key={k} value={k}>{v}</option>
                )
            }
        </select>
    );
}

function comparator(a, b) {
    if (a[1] > b[1])
        return 1;
    else if (a[1] < b[1])
        return -1;
    return 0;
}
