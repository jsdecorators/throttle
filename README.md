# @jsdecorators/throttle

## install
```sh

~$ yarn add @jsdecorators/throttle

```

or

```sh

~$ npm i @jsdecorators/throttle

```

## how to use

```ts
import throttle from '@jsdecorators/throttle';

class MyClass {

  @throttle(100)
  onScroll() {
    console.log('onScroll is called!');
  }

}

```

