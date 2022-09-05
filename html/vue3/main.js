const { createApp } = Vue

import MainHome from './src/views/home/index.js'

const AppObj = {
  components: { MainHome },
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
}
const App = createApp(AppObj)

App.use(ElementPlus)
// 最终页面挂载
App.mount('#app')
