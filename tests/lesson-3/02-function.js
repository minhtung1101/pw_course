// Bai 1:
function caculator(weight, height) {
    BMI = (weight / (height * height))
    if (BMI < 18.5) {
        return 'Thiếu cân';

    } else if (BMI < 25) {
        return 'Bình thường';

    } else if (BMI < 30) {
        return 'Thừa cân';

    } else {
        return 'Béo phì';
    }
}
console.log(caculator(70, 1.7));
// Bài 2:
function convertTemp(temp, types) {
    // if (types == 'C') {
    //     return (temp * 9 / 5) + 32;
    // } else if (types == 'F') {
    //     return (temp - 32) * 5 / 9;
    // } 
    switch (types) {
        case 'C':
            return (temp * 9 / 5) + 32 + types;
        case 'F':
            return (temp - 32) * 5 / 9 + types;
        default:
            return 'sai loại nhiệt';
    }
}
console.log(convertTemp(100, 'C'));
console.log(convertTemp(212, 'F'));

// Bài 3
fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
let x = 0;
function sumArray(arr) {
    for (let i in arr) {
        x += arr[i];
    }
}
sumArray(fibonacci);
console.log(x);
// Bài 4
function findPrime(arr) {
    arr.forEach(item => {
        if (item !== 1 && item !== 0 && (item % item) === 0) {
            console.log(`Đây là số nguyên tố ${item}`)
        }
    });
}
findPrime(fibonacci);
// Bài 5
let global = [
    per1 = {
        name: 'naruto',
        email: 'naruto@konoha.vip'
    },
    per2 = {
        name: 'Đệ nhị',
        email: 'antiUchiha@konoha.vip'
    }, per3 = {
        name: 'Chaien',
        email: 'HatHay@gmail.com'
    }, per4 = {
        name: 'Nobita',
        email: 'hocGioi@doremon.vip'
    }
];
function updateGlobal(name, newEmail) {
    for (let item of global) {
        if (item.name === name) {
            item.email = newEmail;
        };

    }
}
updateGlobal('Nobita', 'BoyHienLanh@gmail.com');
// Bài 6:
let student = [{
    name: "Alex",
    score: 20
}, {
    name: "Mêo mun",
    score: 90

}, {
    name: "Chaien",
    score: 10
}, {
    name: "Nobita",
    score: 0
}
]
function caculatorScore(arr) {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i].score;
    }
    return sum / (arr.length + 1);
}
console.log(caculatorScore(student));
// Bài 7:
let product = [{
    name: "Rau",
    price: 10
}, {
    name: "Thịt",
    price: 90
}, {
    name: "Lại là Mèo cam",
    price: 0
}]
function test() {
    product.forEach(item => {
        if (item.price > 0) {
            console.log(`${item.name} có giá ${item.price} VND`);
        } else {
            console.log(`${item.name} đang free`);

        }
    });
}
test();
// Bài 8:
function time(hour) {
    if (hour >= 9 && hour <= 21) {
        return 'Đang mở cửa';
    }
    else {
        return 'Đang đóng cửa';
    }
}
console.log(time(12));
// Bài 9:
function checkIn(age) {
    if (age <= 5) {
        return 'Free';
    } else if (age >= 6 && age <= 17) {
        return '50 VND';
    } else {
        return '100 VND';
    }
}
console.log(checkIn(2));
// Bài 10:
function printMonth(month) {
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Invalid month';

    }
}
console.log(printMonth(10));
// Bài 11:
function rating(score) {
    if (score >= 8) {
        return 'Giỏi';
    } else if (score >= 6.5 && score < 8) {
        return 'Khá';
    } else if (score >= 5 && score < 6.5) {
        return 'Trung bình';
    } else {
        return 'Yếu';
    }
}
console.log(rating(10));
// Bài 12:
function weather(temp) {
    if (temp >= 30) {
        return 'Nóng';
    } else if (temp >= 20 && temp < 30) {
        return 'Mát';
    } else if (temp < 20) {
        return 'Lạnh';
    }

}
