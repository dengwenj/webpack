import _ from 'lodash'
import dayjs from 'dayjs'

console.log('index webpack')
console.log(_.join(['d', 'w', 'index']))
console.log(dayjs())

import(/* webpackChunkName: 'foo' */'./foo').then((res) => {
  console.log(res)
})

import(/* webpackChunkName: 'bar' */'./bar').then((res) => {
  console.log(res)
})
