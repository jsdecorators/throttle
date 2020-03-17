# @jsdecorators/throttle

>Encapsulate `lodash.throttle` to a decorator.
For further details please check [lodash/throttle.js](https://github.com/lodash/lodash/blob/master/throttle.js)

## install
```sh

~$ yarn add @jsdecorators/throttle

```

or

```sh

~$ npm i @jsdecorators/throttle

```

## usage

```ts
import throttle from '@jsdecorators/throttle';

class MyClass {

  @throttle(100)
  onScroll() {
    console.log('onScroll is called!');
  }

}

```

