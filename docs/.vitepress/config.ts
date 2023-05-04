import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default defineConfig({
  title: 'yuui基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/yu-el-ui/',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'yuui基础组件文档',
    outline: 3,
    nav:[
      { text: '基础组件', link: '/components/Yubutton/base.md' },
      { text: '项目说明', link: '/components/README.md' },
    ],
    sidebar:{
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: '按钮', link: '/components/Yubutton/base.md' },
            { text: '输入框', link: '/components/YuInput/base.md' },
          ]
        },
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  }
})