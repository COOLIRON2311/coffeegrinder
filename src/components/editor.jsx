import { useEffect, useState } from "react";

export function Editor(props) {

    const [code, setCode] = useState("");

    useEffect(() => {
        if (!code)
            return;

        // Delay sending API request until user finishes typing
        const delayDebounceFn = setTimeout(() => {
            // TODO: API request
        }, 1000);

        return () => clearTimeout(delayDebounceFn);

    }, [code]);

    return (
        <textarea
            className="panel"
            rows={35}
            cols={80}
            onChange={e => setCode(e.target.value)}
        />
    );
}
