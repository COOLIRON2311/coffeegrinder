import { createRoot } from 'react-dom/client';
import { App } from "./components/app";

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const root = createRoot(document.getElementById('root'));
    root.render(
        <App />
    );
}
