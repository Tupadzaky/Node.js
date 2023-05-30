function areAnagrams(string1: string, string2: string): boolean {
    return string1.split('').sort().join('') === string2.split('').sort().join('');
}

console.log(areAnagrams("aboba", "aboba"))
console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('hello', 'world'));