require.config({
  baseUrl: './', //reqireJS解析的基准路径，define引入的基准根路径
  paths: {
    text: 'lib/require/text@2.0.16',
    css: 'lib/require/css',
    vue: 'lib/vue/vue@2.7.10',
    vueRouter: 'lib/vue/vue-router@3.6.4',
    ELEMENT: 'lib/vue/elementUI@2.15.9',
    promise: 'lib/common/q',
  },
  shim: {
    promise: {
      exports: 'Q',
    },
    ELEMENT: {
      deps: ['vue', 'css!lib/vue/elementUI@2.15.9.css'],
    },
  },
})
require(['main.js'])
