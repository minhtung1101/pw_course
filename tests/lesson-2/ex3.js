const number = Math.floor(Math.random()* (10 - (-10))  + -10);
if (number > 0) {
    console.log('Giá trị bạn nhập là số dương');
} else if (number < 0) {
    console.log('Giá trị bạn nhập là số âm');
} else {
    console.log('Giá trị bạn nhập là số 0');
}