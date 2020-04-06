
### My Object

1. My ```Object```, at first ```Object``` is a function, and it will got one param to return a object value.

``` JavaScript
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
``` JavaScript
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