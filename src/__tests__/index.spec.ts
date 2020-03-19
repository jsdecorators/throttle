import throttle from '../index';

const continuesCall = (callback: () => void, wait: number) => setInterval(callback, wait);

const throttledFunction = jest.fn(() => true);

let handler = 0;

class MyClass {
  @throttle(100)
  throttledFunction() {
    throttledFunction();
    return this.myProperty;
  }

  myProperty = 'myProperty';
}

it('should have been called for 20 times', done => {
  const myClass = new MyClass();
  handler = continuesCall(myClass.throttledFunction, 10);
  setTimeout(() => {
    expect(throttledFunction).toHaveBeenCalledTimes(20);
    done();
  }, 2e3);
});

it('should be worked well with bind', () => {
  const myClass = new MyClass();
  myClass.throttledFunction = myClass.throttledFunction.bind(myClass);
  const fn = myClass.throttledFunction;
  expect(fn.call(undefined)).toBe('myProperty');
});

afterEach(() => {
  clearInterval(handler);
});
