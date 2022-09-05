define([
  'lib/require/ResolveComponent',
  'vue',
  'vueRouter',
  'src/views/root/index',
  'src/views/home/index',
], function (ResolveComponent, vue, vueRouter) {
  'use strict'
  vue.use(vueRouter)

  const routes = [
    {
      path: '/',
      component: ResolveComponent('src/views/root/index'),
    },
    { path: '/home', component: ResolveComponent('src/views/home/index') },
  ]

  return new vueRouter({
    // mode: 'history',
    routes,
  })
})
