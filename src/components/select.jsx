/**
 *
 * @param {Object} props
 * @param {string} props.id
 * @param {Map} props.selection
 * @param {Function} props.action
 * @returns
 */
export function Select({ id, selection, action: setter }) {
    return (
        <select id={id} onChange={e => setter(e.target.value)}>
            {
                selection.sort(comparator).map(i =>
                    <option key={i[1]} value={i[1]}>{i[0]}</option>
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
