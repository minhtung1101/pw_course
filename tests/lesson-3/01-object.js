//1.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(`Năm sản xuất ${car.year}`);
//2.
let person = {
    name: "Thái Hoa Nhài",
    address: { street: "125 Phùng Hưng", city: "Ha noi", country: "Viet Nam" }
};
console.log(`Cần tìm bạn ${person.name} ở ${person.address.street}`);
//3.
let student = {
    name: 'Mười',
    grades: {
        math: 1,
        english: 9.8
    }
};
console.log(`Bạn ${student.name} trượt môn với ${student['grades']['math']} điểm :<`);
//4.
let product = {
    'Mèo mun': 900000,
    'Mèo mướp': 1000000,
    'Mèo méo meo': 0,
    'Mèo Anh lông ngắn': 1400000,
    'Mèo bengal': 3000000,
    'Mèo Cam': 'Freeeee'
}
for (const key in product) {
    console.log(`Giá của ${key} là ${product[key]} VND`)
}
//5.
let settings = {
    volume: '2',
    brightness: 99
};
settings.volume = 100;
console.log(settings);
//6.
const bike = {};
bike.color = 99;
console.log(bike);
//7.
const employee = { name: "Phùng Hưng", age: 70 };
delete employee.age;
console.log(employee)
//8.
const school = {
    classA: ['An', 'Bình', 'Châu'],
    classB: ['Đào', 'Hương', 'Giang']
}
console.log(school)
