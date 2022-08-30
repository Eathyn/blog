import { defineClientConfig } from '@vuepress/client'
import HomePage from './components/HomePage.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('HomePage', HomePage)
  },
  setup() {},
  rootComponents: [],
})
