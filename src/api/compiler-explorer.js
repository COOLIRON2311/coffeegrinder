export class CompilerExplorer {
    #URL;

    constructor(url = "https://godbolt.org") {
        this.#URL = url;
    }

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
