function sum(arr){
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result;
}
console.log(sum([1,2,3,4,5,6]));