import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // The wiki's own interface strings, one file per locale in src/content/i18n/. As in the Crafting
  // Apps' catalogs, the English text is the key ("wiki.<English>"); English itself needs no file.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
