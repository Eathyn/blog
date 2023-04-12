import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  lang: 'zh-CN',
  theme,

  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },
});
