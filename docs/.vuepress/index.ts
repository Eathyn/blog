import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'

// @ts-ignore
const __dirname = getDirname(import.meta.url)

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'theme/layouts/Layout.vue'),
    },
  }
}
