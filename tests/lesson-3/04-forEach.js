let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
let sum = 0;
// Bài 1
fibonacci.forEach(element => {
    console.log(element);
});
// fibonacci.forEach(element => console.log(element););
// Bài 2:
let min = fibonacci[0];
let max = fibonacci[0];
fibonacci.forEach(element => {
    sum += element;
    if (min > element) {
        min = element;
    }
    if (max < element) {
        max = element;
    }
});
console.log("Tổng: " + sum);
console.log("min: " + min);
console.log("max: " + max);
// Bài 3:
newArr = [];
fibonacci.forEach(element => {
    newArr.push(element * 2);
});
console.log(newArr);
