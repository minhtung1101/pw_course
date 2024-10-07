
let student = [{
    name: "Alex",
    age: 20,
    salary: 20
}, {
    name: "Mèo Mướp",
    age: 90,
    salary: 40
}, {
    name: "Chaien",
    age: 10,
    salary: 60

}, {
    name: "Nobita",
    age: 10,
    salary: 90
}
]
// Bài 1
for (let item in student) {
    console.log(student[item].name + "=" + student[item].age);
}
// Bài 2
for (let item in student) {
    console.log(student[item].salary + student[item].age);
}
// cách 2
let sum=0;
for (const key in student) {
    if (key == "salary" || key == "age") {
        sum += student[key];
    }
}
for (const key in student) {
    if(typeof student[key] == "number"){
}
}
 console.log("=====");
 console.log(sum);



// Bài 3:
let arr = [];
for (let item in student) {
    Object.keys(student[item]).forEach(element => {
        arr.push(element);
    })
}
console.log(arr);
