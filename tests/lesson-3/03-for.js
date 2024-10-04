// Bài 1:
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);
// Bài 2:
function caculator(a, b) {
    return a * b;
}

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${caculator(i, j)}`);
    }
}
// Bài 3:
let arr = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        arr.push(i);
    }
}
console.log(arr)
// Bài 4
for (let i = 1; i < 10; i++) {
    console.log(`user${i}@gmail.com`);
}
// Bài 5:
sum =0;
arr = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 1000 },
    { month: 11, total: 1100 },
    { month: 12, total: 1200 },];
    arr.forEach(item => {
    sum+= item.total;
});
console.log(sum);




