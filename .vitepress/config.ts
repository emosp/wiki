import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'emos wiki',
  description: 'emos wiki',
  srcDir: './docs',
  lang: 'zh-CN',
  base: '/',
  outDir: './dist/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://emos.lol/favicon.svg',
    search: {
      provider: 'local',
    },
    nav: [{ text: '主页', link: 'https://emos.lol/' }],
    socialLinks: [{ icon: 'github', link: 'http://github.com/emosp/home' }],
    editLink: {
      pattern: 'http://github.com/emosp/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          {
            text: '开始',
            link: '/introduction/start',
          },
          {
            text: '碎碎念',
            link: '/introduction/muttering',
          },
          {
            text: '入群须知',
            link: '/introduction/join_group',
          },
          {
            text: '设计思路',
            link: '/introduction/design',
          },
          {
            text: '兼容性列表',
            link: '/introduction/compatibility',
          },
        ],
      },
      {
        text: '资源',
        link: '/media',
      },
      {
        text: '招募',
        link: '/recruit',
      },
      {
        text: '榜单',
        link: '/ranking',
      },
      {
        text: '大史记',
        link: '/news',
      },
      {
        text: 'api',
        collapsed: true,
        items: [
          {
            text: '开发计划',
            link: '/api/plan',
          },
          {
            text: '使用',
            link: '/api/use',
          },
          {
            text: '连接',
            link: '/api/link',
          },
          {
            text: '上传相关',
            link: '/api/upload',
          },
          {
            text: '获取视频ItemId',
            link: '/api/get_video_item_id',
          },
        ],
      },
    ],
  },
})
