function isEven(n){
    if(n == 0){
        return true;
    } else if(n == 1){
        return false;
    } else if (n < 0){
        //catch for negative numbers
        return isEven(-n);
    } else {
        //runs again minus 2, until number can be determined even or odd
        return isEven(n - 2);
    }
}

console.log(isEven(50));