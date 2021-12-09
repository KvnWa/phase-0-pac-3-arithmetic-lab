function add(x, y) {
    return(x + y);
}

console.log(add(1, 2));

function subtract(x, y) {
    return(x - y);
}

function multiply(x, y) {
    return(x * y);
}

console.log(multiply(3, 2));

function divide(x, y) {
    return(x / y);
}

console.log(divide(9, 3));

let n;

n=10;

function increment(n) {
    return n += 1;
}

console.log(n);

function decrement(n) {
    console.log(n);
        return( n -= 1);
}

function makeInt(x, base) {
    const parsed = parseInt(x, 10);
    if (isNaN(parsed)) { return "appropriate"; }
    return parsed;
}

console.log(makeInt("55", 10));

function preserveDecimal(x, base) {
    const parsing = parseFloat(x, 10);
    if (isNaN(parsing)) { return "appropriate"; }
    return parsing;
}