import { CompilerExplorer } from "../api/compiler-explorer";
import React, { useEffect, useState } from "react";
import { Editor } from "./editor";
import { Viewer } from "./viewer";
import stripAnsi from "strip-ansi";

export function App() {
    const ce = new CompilerExplorer();
    const [code, setCode] = useState("");
    const [bytecode, setBytecode] = useState("");

    useEffect(() => {
        if (!code) {
            setBytecode("");
            return;
        }
        // Delay sending API request until user finishes typing
        const delayDebounceFn = setTimeout(() => {
            // TODO: API request
            setBytecode(stripAnsi("Lorem ipsum"));
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [code]);


    return (
        <div className="panels-container">
            <div className="panel-div">
                <Editor setCode={setCode} />
            </div>
            <div className="panel-div">
                <Viewer bytecode={bytecode} />
            </div>
        </div>
    );
}
