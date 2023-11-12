import React, { useState } from "react";
import { Editor } from "./editor";
import { Viewer } from "./viewer";

export function App() {
    return (
        <div className="panel-container">
            <Editor />
            <Viewer />
        </div>
    );
}
