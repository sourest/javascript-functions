
# My Function

``` js
function MyFunction () {

}

const getGlobal = (function() {
  const _this = this
  return () => _this
})()

MyFunction.prototype.call = function (context, ...args) {
  if (context === null || context === undefined) {
    context = getGlobal()
  } else if (typeof context !== 'object' && typeof context !== 'function') {
    context = MyObject(context)
  }
  
  const _thisKey = Symbol('this key')
  context[_thisKey] = this
  const result = context[_thisKey](...args)
  delete context[_thisKey]
  return result
}

MyFunction.prototype.apply = function (context, args) {
  if (context === null || context === undefined) {
    context = getGlobal()
  } else if (typeof context !== 'object' && typeof context !== 'function') {
    context = MyObject(context)
  }
  
  const _thisKey = Symbol('this key')
  context[_thisKey] = this
  const result = context[_thisKey](...args)
  delete context[_thisKey]
  return result
}

MyFunction.prototype.bind = function (context, ...args) {
  const func = this
  return function () {
    return func.apply(context, args)
  }
}
```
