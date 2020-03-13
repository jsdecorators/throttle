import throttle = require('lodash.throttle');

interface ThrottleSettings {
  leading?: boolean;
  trailing?: boolean;
}

export default function(wait: number, options: ThrottleSettings = {}) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get(this: any): any {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, wait, options),
        });

        return this[name];
      },
    };
  };
}
