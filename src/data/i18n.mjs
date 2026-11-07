// The wiki's interface strings in the page's language. `t` is Astro.locals.t; the English text is
// the key, so a string with no translation shows in English, as in the Crafting Apps.
export const translator = (t) => (text) => (t.exists(`wiki.${text}`) ? t(`wiki.${text}`) : text);

// The path prefix of the page's locale: '' for English at the root, '/ar' for Arabic.
export const localeBase = (route) => (route.locale ? `/${route.locale}` : '');
