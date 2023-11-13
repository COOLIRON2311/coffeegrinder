import React, { useEffect, useState } from "react";
import { Editor } from "./editor";
import { Viewer } from "./viewer";
import { CompilerExplorer } from "../api/compiler-explorer";
import stripAnsi from "strip-ansi";

export function App() {
    const ce = new CompilerExplorer();
    const [code, setCode] = useState("");
    const [bytecode, setBytecode] = useState("");



    useEffect(() => {
        if (!code)
            return;

        // Delay sending API request until user finishes typing
        const delayDebounceFn = setTimeout(() => {
            // TODO: API request
            ce.compile(code, "g82", "c++").then(r => {
                setBytecode(stripAnsi(r));
            });
        }, 1000);

        return () => clearTimeout(delayDebounceFn);

    }, [code]);


    return (
        <div className="panel-container">
            <Editor setCode={setCode} />
            <Viewer bytecode={bytecode} />
        </div>
    );
}
