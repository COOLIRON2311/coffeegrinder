/**
 *
 * @param {Object} props
 * @param {string} props.bytecode
 * @returns
 */
export function Viewer({bytecode}) {

    return (
        <textarea
            id="viewer"
            className="panel"
            rows={35}
            cols={80}
            readOnly={true}
            value={bytecode}
        />
    );
}
