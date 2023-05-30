function deepClone<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let clone: T;
    if (Array.isArray(obj)) {
        clone = [] as unknown as T;
    } else {
        clone = {} as T;
    }
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

const obj1 = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'cooking'],
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

const array = [1, 2, 3, 4];
const obj1Clone = deepClone(obj1);
const arrayClone = deepClone(array);
console.log(obj1 === obj1Clone);
console.log(array === arrayClone)