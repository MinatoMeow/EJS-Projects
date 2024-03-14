function countChar(string, char) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == char) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BaByBBB"));