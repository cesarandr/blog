import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://cesar-blog.github.io',
  base: '/blog',
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
})
