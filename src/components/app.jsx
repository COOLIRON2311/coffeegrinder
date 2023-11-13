import React, { useEffect, useState } from "react";
import { Editor } from "./editor";
import { Viewer } from "./viewer";

export function App() {
    const [code, setCode] = useState("");
    const [bytecode, setBytecode] = useState("");

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
        <div className="panel-container">
            <Editor setCode={setCode} />
            <Viewer bytecode={code} />
        </div>
    );
}
