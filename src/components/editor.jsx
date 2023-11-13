/**
 *
 * @param {Object} props
 * @param {Function} props.setCode
 * @returns
 */
export function Editor({setCode}) {
    return (
        <textarea
            className="panel"
            rows={35}
            cols={80}
            onChange={e => setCode(e.target.value)}
        />
    );
}
