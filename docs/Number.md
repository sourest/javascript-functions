
# My Number

Create my ```MyNumber```.
```js
function MyNumber (value) {
  if (this instanceof MyNumber) {
    var number = {}
  } else {
    return +value
  }
}
```

## MyNumber.isNaN

How to implement my ```MyNumber.isNaN``` function ? As we all know that ```NaN === NaN``` would got ```false```, cause there is nothing equal to ```NaN```, and then how we implement ```MyNumber.isNaN```.

First: ```String``` ?
``` js
function isNaN (value) {
  return Object.prototype.toString.call(value) === '[object MyNumber]' && value.toString() === "NaN"
}

MyNumber.myIsNaN = isNaN
```
Oh, Good.
Test:
``` js
MyNumber.myIsNaN(NaN) // -> true
MyNumber.myIsNaN(1) // -> false

var number = new MyNumber(1)
number.toString = function () { return 'NaN' }

MyNumber.myIsNaN(number) // -> true -> What ? Why ? How ?
```
So, we do some upgrade:
``` js
function isNaN (value) {
  return typeof value === 'number' && value.toString() === "NaN"
}

MyNumber.myIsNaN = isNaN
```
Try Again:
``` js
MyNumber.myIsNaN(NaN) // -> true
MyNumber.myIsNaN(1) // -> false
MyNumber.myIsNaN('NaN') // -> false
MyNumber.myIsNaN() // -> false

var number = new MyNumber(1)
number.toString = function () { return 'NaN' }

MyNumber.myIsNaN(number) // -> false
```
Okay, Good !
