let obj = { here: { is: "an" }, object: 2 };
//compares to s
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") {
        return false;
    }

    var propsInA = 0, propsInB = 0;
//counts amount of properties in each object
    for (var prop in a) {
        propsInA += 1;
    }

    for (var prop in b) {
        propsInB += 1;
//recursively run fuction to verify properties do not match
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }
    return propsInA === propsInB;
}

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));