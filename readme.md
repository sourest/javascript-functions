# My JavaScript Functions Implementation

## I. Native JavaScript Functions

### 1. Number

### Number

Create my ```Number```.
```js
function MyNumber (value) {
  if (this instanceof MyNumber) {
    var number = {}
  } else {
    return +value
  }
}
MyNumber  
```

#### Number.isNaN

How to implement my ```Number.isNaN``` function ? As we all know that ```NaN === NaN``` would got ```false```, cause there is nothing equal to ```NaN```, and then how we implement ```Number.isNaN```.

First: ```String``` ?
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
Try Again:
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

#### Number.isNaN

### Function

### Object

1. My ```Object```, first ```Object``` is a function, and it will got one param to return a object value.

``` js
function MyObject (value) {
  const type = typeof value
  if (value === null) {
    return {}
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
  return {}
}

```
But when we use ```MyObject()``` function, there is a ```Object``` instance would got instead of ```MyObject``` instance, could we changed it ? Let's do some try.
``` js
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

```

### Array


### String

### RegExp

### JSON

