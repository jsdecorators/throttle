interface ThrottleSettings {
    leading?: boolean;
    trailing?: boolean;
}
export default function (wait: number, options?: ThrottleSettings): (target: any, name: string, descriptor: PropertyDescriptor) => {
    configurable: boolean;
    enumerable: boolean | undefined;
    get(this: any): any;
};
export {};
