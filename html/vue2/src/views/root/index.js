define(['vue', 'text!./index.html', 'css!./index.css'], function (vue, TempLate) {
  'use strict'

  return vue.extend({
    template: TempLate,
    data() {
      return {}
    },
    created() {
      console.log(12321)
    },
    mounted() {},
    methods: {},
  })
})
