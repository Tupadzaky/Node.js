function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let clone;
    if (Array.isArray(obj)) {
        clone = [];
    } else {
        clone = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
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