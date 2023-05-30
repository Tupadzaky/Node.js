const wrapper = (func) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log(`Result from cache: ${cache.get(key)}`);
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        console.log(`Calculated: ${result}`);
        return result;
    };
};

const calc = (a, b, c) => a + b + c;
const cachedCalc = wrapper(calc);
cachedCalc(2, 2, 3);
cachedCalc(5, 8, 1);
cachedCalc(2, 2, 3);