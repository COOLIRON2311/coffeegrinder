import { React } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./components/app";

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
}
