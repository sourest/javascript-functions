
# My Array
``` js
function MyArray () {

}

```
## Array.prototype.forEach

``` js
MyArray.prototype.forEach = function (callback, thisArg) {
  const array = this
  const arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    try {
      callback.call(thisArg || array, array[i], i, array)
    } catch (error) {
      console.error(error)
    }
  }
}
```
But, there is some problem with a array like this: ```Array(2)```, the ```forEach``` will call the callback twice, instead of ```Array.prototype.forEach``` 0. We do some change.
``` js
MyArray.prototype.forEach = function (callback, thisArg) {
  const array = this
  const arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    try {
      if (array.hasOwnProperty(String(i))) {
        callback.call(thisArg || array, array[i], i, array)
      }
    } catch (error) {
      console.error(error)
    }
  }
}
```
Or:
``` js
MyArray.prototype.forEach = function (callback, thisArg) {
  const array = this
  const arrayLength = array.length
  for (let i in array) {
    try {
      callback.call(thisArg || array, array[i], Number(i), array)
    } catch (error) {
      console.error(error)
    }
  }
}
```

## Array.prototype.map

```js
MyArray.prototype.map = function (callback, thisArg) {
  const _this = this
  const mapResult = []
  this.forEach(function (item, index) {
    mapResult[index] = callback.call(thisArg || _this, ...arguments)
  }, thisArg)
  return mapResult
}
```

## Array.prototype.slice

```js
MyArray.prototype.slice = function (param1, param2) { // To make Array.prototype.slice.length return 2
  let begin = ~~(arguments[0]) || 0
  let end = ~~(arguments[1]) || this.length
  let part = []

  if (begin >= this.length) {
    return part
  } else if (begin < 0) {
    begin = this.length + begin
    if (begin < 0) {
      begin = 0
    }
  }
  if (end >= this.length) {
    end = this.length
  } else if (end < 0) {
    end = this.length + end
    if (end < 0) {
      return part
    }
  }
  if (end < begin) {
    return part
  }
  for(let i = begin, j = 0; i < end; i++, j++ ) {
    if (this.hasOwnProperty(String(i))) {
      part[j] = this[i]
    }
  }
  return part
}
```

## Array.prototype.push

```js
MyArray.prototype.push = function () {
  const _this = this
  const length = _this.length
  const argsLength = arguments.length
  for(let i = 0; i < argsLength; i++ ) {
    _this[length + i] = arguments[i]
  }
  return _this.length
}
```