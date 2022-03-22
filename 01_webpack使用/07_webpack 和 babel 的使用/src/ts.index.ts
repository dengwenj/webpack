const info = 'hello ts'

const foo = (info: string) => {
  console.log(info)
}

const p = new Promise(() => {})

foo(info)