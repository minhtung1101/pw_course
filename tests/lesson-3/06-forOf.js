let arr = [1, 2, 3, 1, 2, 4, 5, 5]

// Bài 1:
let count;
let x=arr[0];
for (let item of arr) {
if (item - x===0) {
    x = item;
}
    console.log(item);
}
// Bài 2 :
let str = 'Playwright';
let newArr = [];
let newStr = '';
for (let char of str) {
    newStr = char + newStr;  // đảo ngược
}
for (let char of newStr) {
    newArr.push(char);
}
console.log(newArr);
// Bài 3:
for (let i = 0; i < arr.length-1; i++) {
    count =0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
           count++;
        }
    }
    if (count === 1) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);



