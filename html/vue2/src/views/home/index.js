define(['vue', 'text!./index.html', 'css!./index.css'], function (vue, TempLate) {
  'use strict'
  return vue.extend({
    template: TempLate,
    data() {
      return {}
    },
    mounted() {},
    methods: {},
  })
})
