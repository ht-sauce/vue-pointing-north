const { defineComponent } = Vue
import homeTemplate from './template.js'

export default defineComponent({
  template: homeTemplate,
  name: 'MainHome',
  created() {
    const style = document.createElement('link')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('type', 'text/css')
    style.setAttribute('href', './views/home/home.css')
    document.body.appendChild(style)
  },
})
