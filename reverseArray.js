//function to take in an array and create a new array, reversed
function reverseArray(array) {
    let output = [];
    for (var i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}
//Function to take in an array, and modifies the array to be reversed
function reverseArrayInPlace(array) {

    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["a", "b", "c"]));

console.log(reverseArrayInPlace(["a", "b", "c"]));