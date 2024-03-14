function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        /*iterates through array, takes each element, adds to a list, 
        and links the list to the previously created list element*/
        list = { value: array[i], rest: list };
    }
    return list;
}
function listToArray(list) {
    var array = [];
    //iterates through list and pushes each value into an array, then iterates again
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
function prepend(el, list) {
    list = { value: el, rest: list };
    return list;
}
function nth(list, n) {
    if (!list) {
        return undefined;
    } else if (n == 0) {
        //if n is zero it returns the first object in the list
        return list.value;
    } else {
        /*reiterates through by returning the connected lists to the first element, 
        until n = 0 then returns said value.*/
        return nth(list.rest, n - 1);
    }
}
myArray = [1,2,3];

console.log(arrayToList(myArray));
console.log(listToArray(arrayToList(myArray)));
console.log(prepend(1, prepend(2, null)));
console.log(nth(arrayToList(myArray), 0));