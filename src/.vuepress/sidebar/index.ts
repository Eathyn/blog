import { sidebar } from "vuepress-theme-hope";
import solution from './content/solution'
import frontEnd from './content/frontEnd'
import backEnd from './content/backEnd'
import cs from './content/cs'
import tool from './content/tool'
import english from './content/english'
import math from './content/math'

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
  '/front_end/package_manager': frontEnd.packageManager,
  '/front_end/bundler': frontEnd.bundler,
  '/front_end/engineering': frontEnd.engineering,

  // back end
  '/back_end/node': backEnd.node,

  // computer science
  '/cs/dsa/': cs.dsa,
  '/cs/network': cs.network,
  '/cs/database': cs.database,
  '/cs/others/': cs.others,

  // tool
  '/tool/git': tool.git,
  '/tool/blog': tool.blog,
  '/tool/common': tool.common,

  // english
  '/english/speaking': english.speaking,
  '/english/reading': english.reading,

  // math
  '/math/discrete_mathematics': math.discreteMathematics,
  '/math/numbers': math.numbers,
});

export default sideBar
