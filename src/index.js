
function MyObject (value) {
  if (this instanceof MyObject) {
    console.log('use new')
  } else {
    const type = typeof value
    if (value === null) {
      return new MyObject()
    } else if (type === 'object' || type === 'function') {
      return value
    } else if (type === 'number') {
      return new MyNumber(value)
    } else if (type === 'string') {
      return new MyString(value)
    } else if (type === 'boolean') {
      return new Boolean(value)
    } else if (type === 'symbol') {
      return Symbol(value) // can't use new
    } else if (type === 'bigint') {
      return Bigint(value) // can't use new
    }
    return new MyObject()
  }
}

(function () {
  const prototype = {}
  let __proto__ = null

  prototype.__proto__ = __proto__

  const funs = {
    'set __proto__': () => {
      return __proto__
    },
    'set __proto__': () => {
      __proto__ = arguments[0]
    }
  }

  Object.defineProperty(prototype, '__proto__', {
    enumerable:false,
    get: funs['get __proto__'],
    set: funs['set __proto__'],
  })

  MyObject.prototype = prototype
})(MyObject)

