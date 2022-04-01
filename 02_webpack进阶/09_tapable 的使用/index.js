const { SyncHook, SyncBailHook, SyncLoopHook, SyncWaterfallHook } = require('tapable')
const { AsyncSeriesHook, AsyncParallelHook } = require('tapable')

let count = 1
class DWJTapable {
  constructor() {
    this.hooks = {
      // syncHook: new SyncHook(['name', 'age'])
      // 当有返回值时，就不会执行后续的事件触发了
      // syncHook: new SyncBailHook(['name', 'age'])
      // 当返回值为true，就会反复执行该事件，当返回值为undefined或者不返回内容，就退出事件
      // syncHook: new SyncLoopHook(['name', 'age'])
      // 当返回值不为undefined时，会将这次返回的结果作为下次事件的第一个参数；
      syncHook: new SyncWaterfallHook(['name', 'age']),

      // asyncHook: new AsyncParallelHook(['name', 'age'])
      asyncHook: new AsyncSeriesHook(['name', 'age'])
    }

    // this.hooks.syncHook.tap('event1', (name, age) => {
    //   return 'wwwwwwwwwwww'
    // })

    // this.hooks.syncHook.tap('event2', (name, age) => {
    //   console.log(name, age)
    // })

    // this.hooks.asyncHook.tapAsync('event1', (name, age, callback) => {
    //   setTimeout(() => {
    //     console.log(name, age)
    //     callback()
    //   }, 1000)
    // })

    // this.hooks.asyncHook.tapAsync('event2', (name, age, callback) => {
    //   setTimeout(() => {
    //     console.log(name, age)
    //     callback('hhhh')
    //   }, 1000)
    // })

    this.hooks.asyncHook.tapPromise('event1', (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(name, age)
          resolve()
        }, 1000)
      })
    })

    this.hooks.asyncHook.tapPromise('event2', (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(name, age)
          resolve()
        }, 1000)
      })
    })
  }

  emit() {
    // this.hooks.syncHook.call('dwj', 22)
    // this.hooks.syncHook.call('ww', 17)

    // this.hooks.asyncHook.callAsync('dwj', '22', (hh) => {
    //   console.log('执行完成', hh)
    // })
    this.hooks.asyncHook.promise('dwj', '22').then(() => {
      console.log('执行完成')
    })
  }
}

const t = new DWJTapable()
t.emit()