# My JavaScript Functions Implementation

## I. Native JavaScript Functions

### 1. Number

#### Number.isNaN

How to implement my ```Number.isNaN``` function ? As we all know that ```NaN === NaN``` would got ```false```, cause there is nothing equal to ```NaN```, and then how we implement ```Number.isNaN```.

1. String ?
``` js
function isNaN (value) {
  return Object.prototype.toString.call(value) === '[object Number]' && value.toString() === "NaN"
}

Number.myIsNaN = isNaN
```
Oh, Good.
Test:
``` javascript
Number.myIsNaN(NaN) // -> true
Number.myIsNaN(1) // -> false

var number = new Number(1)
number.toString = function () { return 'NaN' }

Number.myIsNaN(number) // -> true -> What ? Why ? How ?
```
So, we do some upgrade:
``` js
function isNaN (value) {
  return typeof value === 'number' && value.toString() === "NaN"
}

Number.myIsNaN = isNaN
```
Test Again:
``` js
Number.myIsNaN(NaN) // -> true
Number.myIsNaN(1) // -> false
Number.myIsNaN('NaN') // -> false
Number.myIsNaN() // -> false

var number = new Number(1)
number.toString = function () { return 'NaN' }

Number.myIsNaN(number) // -> false
```
Okay, Good !


### Function

### Object

### Array


### String

### RegExp

### JSON

