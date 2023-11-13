/**
 *
 * @param {Object} props
 * @param {Function} props.setCode
 * @returns
 */
export function Editor({ setCode }) {
    /**
     * Patch Tab to work properly
     * @param {Event} e
     */
    const onKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const text = e.target.value;
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            e.target.value = text.substring(0, start) + "\t" + text.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
    };

    return (
        <textarea
            id="editor"
            className="panel"
            rows={35}
            cols={80}
            onChange={e => setCode(e.target.value)}
            onKeyDown={onKeyDown}
        />
    );
}
