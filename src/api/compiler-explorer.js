export class CompilerExplorer {
    #URL;

    constructor(url = "https://godbolt.org") {
        this.#URL = url;
    }

    /**
     * Get a list of all supported languages
     * @returns
     */
    languages() {
        return fetch(`${this.#URL}/api/languages`).then(r => {
            const pairs = new Map();
            return r.text().then(lines => {
                lines.split(/\n/).forEach(line => {
                    const [v, k] = line.split(/\|/).map(w => w.trim());
                    pairs.set(k, v);
                });
                pairs.delete("Name");
                return [...pairs];
            });
        });
    }

    /**
     * Get a list of `language's` available compilers
     * @param {string} lang
     */
    compilers(lang) {
        return fetch(`${this.#URL}/api/compilers/${lang}`).then(r => {
            const pairs = new Map();
            return r.text().then(lines => {
                lines.split(/\n/).forEach(line => {
                    const [v, k] = line.split(/\|/).map(w => w.trim());
                    pairs.set(k, v);
                });
                pairs.delete("Name");
                return [...pairs];
            });
        });
    }

    /**
     * Compiler `code` written in `lang` using the `compiler`
     * @param {string} code
     * @param {string} compiler
     * @param {string} lang
     * @returns
     */
    compile(code, compiler, lang) {
        return fetch(`${this.#URL}/api/compiler/${compiler}/compile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "source": code,
                    "compiler": compiler,
                    "options": {},
                    "lang": lang
                }
            )
        }).then(r => r.text());
    }
}
