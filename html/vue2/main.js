define(['vue', 'ELEMENT', 'src/router/index', 'css!app.css'], function (vue, ELEMENT, router) {
  vue.use(ELEMENT, { size: 'small' })

  new vue({
    router: router,
  }).$mount('#app')
})
