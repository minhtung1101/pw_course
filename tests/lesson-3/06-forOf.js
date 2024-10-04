let arr = [1, 2, 3, 1, 2, 4, 5, 5]
// Bài 1: Em không hiểu đề
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
for (let item of arr) {
    count = 0;
    for (let i = arr.length; i >= 0; i--) {
        if (item === arr[i]) {
            count++;
        }
    }
    if (count === 1) {
        newArr.push(item);
    }
}
console.log(newArr);



