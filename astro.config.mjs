import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const apps = [
  ['ArtCraft Studio', 'artcraft-studio'], ['PhotoCraft', 'photocraft'],
  ['VectorCraft', 'vectorcraft'], ['FilmCraft', 'filmcraft'], ['LightCraft', 'lightcraft'],
  ['PdfCraft', 'pdfcraft'], ['EffectCraft', 'effectcraft'], ['DesignCraft', 'designcraft'],
  ['FigCraft', 'figcraft'], ['TextureCraft', 'texturecraft'], ['MaterialCraft', 'materialcraft'],
  ['WordCraft', 'wordcraft'], ['SoundCraft', 'soundcraft'], ['DeckCraft', 'deckcraft'],
  ['CADCraft', 'cadcraft'], ['GridCraft', 'gridcraft'], ['Craft Anything', 'craft-anything'],
  ['SolidCraft', 'solidcraft'],
];

export default defineConfig({
  site: 'https://craft.wiki',
  integrations: [starlight({
    title: 'Craft Wiki',
    // Starlight's default, /favicon.svg, isn't in public/, so every page linked a missing icon.
    favicon: '/assets/apps/artcraft-studio.svg',
    // English pages stay at the root; a translated page goes in src/content/docs/<locale>/ at the same
    // path, and a page not translated yet shows in English with a notice.
    defaultLocale: 'root',
    locales: {
      root: { label: 'English', lang: 'en' },
      ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
    },
    customCss: ['./src/styles/custom.css'],
    components: { Head: './src/components/WikiHead.astro', Header: './src/components/WikiHeader.astro', Sidebar: './src/components/WikiSidebar.astro', PageTitle: './src/components/WikiPageTitle.astro', ThemeProvider: './src/components/WikiThemeProvider.astro', Footer: './src/components/WikiFooter.astro' },
    sidebar: [
      { label: 'Home', translations: { ar: 'الرئيسية' }, link: '/' },
      // A full URL: Starlight prefixes other links with the page's locale, and the editor has no /ar/admin/.
      { label: 'Edit wiki', translations: { ar: 'تحرير الويكي' }, link: 'https://craft.wiki/admin/' },
      ...apps.map(([label, slug]) => ({ label, collapsed: true, items: [{ autogenerate: { directory: `apps/${slug}` } }] })),
    ],
  })],
});
