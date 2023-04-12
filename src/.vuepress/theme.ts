import { hopeTheme } from "vuepress-theme-hope";

import navBar from './navbar'
import sideBar from './sidebar'

export default hopeTheme({
  pure: true,

  hostname: "https://eathyn.github.io/blog",

  docsDir: "docs",

  author: {
    name: "Eathyn",
    url: "https://github.com/Eathyn",
  },

  iconAssets: "iconfont",

  favicon: '/svgviewer-output.svg',

  logo: "/avatar.gif",

  repo: "https://github.com/Eathyn/eathyn.github.io",
  repoDisplay: false,

  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    end: ['Search', 'Outlook', 'Repo'],
  },

  displayFooter: true,
  footer: 'Powered by Vuepress &#x1F680;',

  blog: {
    name: 'Hi, I am Eathyn',
    // intro: "/intro.html",
    avatar: '/avatar.gif',
    description: 'Welcome to My Blog',
    medias: {
      // GitHub: "https://github.com/Eathyn",
    },
    sidebarDisplay: 'mobile',
    timeline: 'To Be Continued...',
    articleInfo: ['Author', 'Original', 'Date', 'PageView', 'Category', 'Tag'],
  },

  locales: {
    "/": {
      navbar: navBar,
      sidebar: sideBar,
    },
  },

  plugins: {
    blog: true,

    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Giscus",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: false,
      attrs: false,
      chart: false,
      codetabs: false,
      container: false,
      delay: 800,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: false,
      imgLazyload: true,
      imgMark: false,
      imgSize: false,
      include: true,
      katex: false,
      mark: true,
      mathjax: false,
      mermaid: true,
      obsidianImgSize: false,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: false,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: false,
      tasklist: false,
      vPre: false,
      vuePlayground: false,
    },
  },
});
