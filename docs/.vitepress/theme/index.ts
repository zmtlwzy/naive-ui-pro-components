// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import naive from 'naive-ui'
import NaiveUIContainer from './components/NaiveUIContainer/index.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.use(naive)
    app.component('DemoContainer', NaiveUIContainer)
  },
}
