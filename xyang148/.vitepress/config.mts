import { defineConfig } from 'vitepress'
const base = "/xyang148/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "XYANG148",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/base/' },
      { text: 'Examples', link: '/base/markdown-examples' },
      {
        text: '程序人生',
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },
        ]
      },
      { text: '关于我', link: '/me' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/base/markdown-examples' },
          { text: 'Runtime API Examples', link: '/base/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
