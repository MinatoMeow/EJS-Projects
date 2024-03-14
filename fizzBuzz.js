for ( let i = 0; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    console.log(output || i);
}
//     if ((j % 3 === 0) && (j % 5 === 0)) {
//         console.log('FizzBuzz');
//         j++;
//         continue;
//     } else if (j % 3 === 0) {
//         console.log('Fizz');
//         j++;
//         continue;
//     } else if (j % 5 === 0) {
//         console.log('Buzz');
//         j++;
//         continue;
//     } 
//     console.log(j++);


