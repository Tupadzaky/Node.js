type CacheKey<T extends unknown[]> = string;
type CacheValue<R> = R | undefined;
type Func<T extends unknown[], R> = (...args: T) => R;

function wrapper<T extends unknown[], R>(func: Func<T, R>): Func<T, R> {
    const cache: Record<CacheKey<T>, CacheValue<R>> = {};
    return (...args: T): R => {
        const key: CacheKey<T> = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {
            const cachedResult = cache[key];
            if (cachedResult !== undefined) {
                console.log(`Result from cache: ${cachedResult}`);
                return cachedResult;
            }
        }
        const result = func(...args);
        cache[key] = result;
        console.log(`Calculated: ${result}`);
        return result;
    };
}

const calc: Func<[number, number, number], number> = (a, b, c) => a + b + c;
const cachedCalc = wrapper(calc);

cachedCalc(2, 2, 3);
cachedCalc(5, 8, 1);
cachedCalc(2, 2, 3);