function getCount(str) {
    const vowel = ["a", "i", "u", "e", "o"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count += 1;
        }
    }
    return count;
}

console.log(getCount("abracadabra"));
