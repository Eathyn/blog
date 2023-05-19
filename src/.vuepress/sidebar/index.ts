import { sidebar } from "vuepress-theme-hope";
import solution from './content/solution'
import frontEnd from './content/frontEnd'
import cs from './content/cs'
import tool from './content/tool'
import english from './content/english'

const sideBar = sidebar({
  // solution
  '/solution': solution,

  // front end
  '/front_end/implement': frontEnd.implement,
  '/front_end/javascript': frontEnd.javascript,
  '/front_end/css': frontEnd.css,
  '/front_end/html': frontEnd.html,
  '/front_end/typescript': frontEnd.typescript,
  '/front_end/browser': frontEnd.browser,
  '/front_end/vue': frontEnd.vue,
  '/front_end/mini_program': frontEnd.miniProgram,
  '/front_end/uniapp': frontEnd.uniapp,

  // computer science
  '/cs/dsa/': cs.dsa,
  '/cs/network': cs.network,
  '/cs/others/': cs.others,

  // tool
  '/tool/git': tool.git,
  '/tool/node': tool.node,

  // english
  '/english/speaking': english.speaking,
  '/english/reading': english.reading,
});

export default sideBar
