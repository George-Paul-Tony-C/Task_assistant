import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Task_assistant/',
  title: "Task Assistant",
  description: "Your Personal Task management Assistant",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://docs.mahinkumar.com/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Guides', link: '/guide' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          {text: 'Building From Source', link:'/docs/buildfromsource'},
          {text: 'Vewing Docs offline', link:'/docs/usingdocsoffline'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mahinkumar/Task_assistant' }
    ]
  }
})
