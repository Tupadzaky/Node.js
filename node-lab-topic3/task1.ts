 function add(num) {
    let sum = num;
    function addNext(nextNum) {
        if (nextNum === undefined) {
            return sum;
        }
        sum += nextNum;
        return addNext;
    }
    return addNext;
}

console.log(add(2)(5)(7)(1)(6)(5)(11)());
