function exponent(a, n) {
    if (n === 0) return 1;
    return a * exponent(a, n - 1);
};
console.log(exponent(4, 2));