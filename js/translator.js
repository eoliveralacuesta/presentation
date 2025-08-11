var CURRENT_LANG;

const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

function t(key, lang = CURRENT_LANG) {
    const v = get(LANGUAGES[lang], key);
    if (v == null) {
        const fb = get(LANGUAGES.ES, key);
        return fb != null ? fb : "";
    }
    return v;
}

function resolveKey(el, explicitKey) {
    const localKey = explicitKey || el.getAttribute("data-i18n");
    // junta TODOS los scopes desde el root al más cercano
    const scopes = [];
    let node = el;
    while (node) {
        if (node.nodeType === 1 && node.hasAttribute?.("data-i18n-scope")) {
            scopes.push(node.getAttribute("data-i18n-scope"));
        }
        node = node.parentElement;
    }
    scopes.reverse(); // de outer → inner
    return scopes.length ? `${scopes.join(".")}.${localKey}` : localKey;
}

function applyI18n(scope = null) {
    let root = document;

    if (scope)
        root = document.querySelectorAll(`[data-i18n-scope="${scope}"]`);

    if (!root || (root instanceof NodeList && root.length === 0)) 
        return;

    const attrPrefix = "data-i18n-";

    let elements = [];
    if (root instanceof Element) {
        elements = [root, ...root.querySelectorAll("*")];
    } else if (root instanceof Document) {
        elements = [...root.querySelectorAll("*")];
    } else if (root instanceof NodeList || Array.isArray(root)) {
        root.forEach(r => {
            if (r instanceof Element) {
                elements.push(r, ...r.querySelectorAll("*"));
            }
        });
    }

    elements.forEach((el) => {
        el.getAttributeNames?.().forEach((name) => {
            if (name !== "data-i18n-scope") {
                if (name === 'data-i18n') {
                    const key = resolveKey(el);
                    const val = t(key);

                    if (typeof val === "string")
                        el.textContent = val;
                    else if (val && typeof val === "object") {
                        // si la traducción es objeto, asigno atributos comunes
                        for (const [k, v] of Object.entries(val)) {
                            if (!v && v !== '') 
                                continue;

                            if (k === "aria") el.setAttribute("aria-label", v);
                            else if (k === "cta") el.innerHTML = v;
                            else el.setAttribute(k, v);                        
                        }
                    }
                }
                else if (name.startsWith(attrPrefix)) {
                    const attr = name.slice(attrPrefix.length);
                    const rawKey = el.getAttribute(name);
                    const key = resolveKey(el, rawKey);
                    const val = t(key);

                    if (typeof val === "string") el.setAttribute(attr, val);
                }
            }
        });
    });
}

function setLang(lang) {
    CURRENT_LANG = LANGUAGES[lang] ? lang : "ES";
    applyI18n(CURRENT_LANG, 'general');

    document.documentElement.setAttribute("lang", CURRENT_LANG.toLowerCase());
}

window.i18n = {
    setLanguage: setLang,
    applyI18n
};
