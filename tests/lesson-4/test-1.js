let departurePlanet = 'Trái Đất';
let mission = 'Khám phá Vũ trụ K10';
let crew = ['Shu', 'Chau tu', 'Ngoc Quynh', 'Phong Do', 'Hanh Ngan', 'Khai Trong Do', 'Minh Thu', 'Minh Trang Bui', 'Nau Da', 'Nga Quynh'];
function launchShip(crew) {
    let mess = `🚀 Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K10! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`;
    return mess;
}
console.log(launchShip(crew));
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}
console.log(`Quãng đường đã đi là ${calculateDistance(1000, 24)} km`);
function convertTimeToHex(time) {
    let hex = time.toString(16);
    return hex;
}
console.log(`Thời gian sau khi chuyển đổi: ${convertTimeToHex(120)}`);
function decryptCode(code) {
    let string = '';
    for (const char of code) {
        if (char === char.toUpperCase()) {
            string += char.toLowerCase();
        } else {
            string += char.toUpperCase();
        }
    }
    return string;
}
console.log(decryptCode('K10 Challenge'));
function returnToEarth() {
    console.log('🚀 Chuẩn bị trở về Trái Đất! ( ・ω・)');
}
returnToEarth();