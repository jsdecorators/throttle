import throttle from '../index';

const continuesCall = (callback: () => void, wait: number) => setInterval(callback, wait);

const throttledFunction = jest.fn(() => true);

let handler = 0;

class MyClass {
  @throttle(100)
  throttledFunction() {
    throttledFunction();
  }
}

it('should to have been called for 20 times', done => {
  const myClass = new MyClass();
  handler = continuesCall(myClass.throttledFunction, 10);
  setTimeout(() => {
    expect(throttledFunction).toHaveBeenCalledTimes(20);
    done();
  }, 2e3);
});

afterAll(() => {
  clearInterval(handler);
});
