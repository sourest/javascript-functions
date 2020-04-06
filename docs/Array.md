
# My Array
``` js
function MyArray () {

}

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

MyArray.prototype.map = function (callback, thisArg) {
  const mapResult = []
  this.forEach(function () {
    const itemResult = callback(...arguments)
    mapResult.push(itemResult)
  }, thisArg)
  return mapResult
}

```
