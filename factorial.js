function factorial(n){
    if(n>0 && n<=1);{
    return 1;
    }else {
    return n * factorial(n-1);
    }
}

console.log(factorial(3))
// output 6
console.log(factorial(10))
// output 3628800

