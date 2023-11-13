import { CompilerExplorer } from "../api/compiler-explorer";
import React, { useEffect, useState } from "react";
import { Editor } from "./editor";
import { Viewer } from "./viewer";
import stripAnsi from "strip-ansi";
import { Select } from "./select";

export function App() {
    const ce = new CompilerExplorer();
    const [code, setCode] = useState("");
    const [bytecode, setBytecode] = useState("");
    const [language, setLanguage] = useState("");
    const [compiler, setCompiler] = useState("");
    const [langs, setLangs] = useState([]);
    const [comps, setComps] = useState([]);

    useEffect(() => {
        if (!langs)
            return;

        ce.languages().then(r => {
            setLangs(r);
        });
    }, []);

    useEffect(() => {
        if (!language)
            return;
        ce.compilers(language).then(r =>
            setComps(r)
        );
    }, [language]);

    useEffect(() => {
        if (!code) {
            setBytecode("");
            return;
        }
        // Delay sending API request until user finishes typing
        const delayDebounceFn = setTimeout(() => {
            ce.compile(code, compiler, language).then(r => {
                setBytecode(stripAnsi(r));
            });
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [code]);


    return (
        <div className="panels-container">
            <div className="panel-div">
                <Select id="language" selection={langs} action={setLanguage} />
                <br />
                <Editor setCode={setCode} />
            </div>
            <div className="panel-div">
                <Select id="compiler" selection={comps} action={setCompiler} />
                <br />
                <Viewer bytecode={bytecode} />
            </div>
        </div>
    );
}
