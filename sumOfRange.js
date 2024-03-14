function range(start, end, step = 1) {
    if (step == null) step = 1; {
        let array = [];
    }
    if (step > 0) {
        for (i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    return array;
}
function sum(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(sum(range(1, 10, 3)));