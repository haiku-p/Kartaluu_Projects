/**
 * CHUỖI TRONG JAVASCRIPT (STRING)
 * 
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào? Lý do?
 *  - Kiểm tra data type
 * 
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết Code
 * 5. Template string ES6
 */

var fullName = new String('Nguyen Hung la \"Hokage\"');

console.log(fullName);
console.log(fullName.length); // Kiểm tra độ dài chuỗi

var firstName = "Quoc Anh";
var lastName = "Luu";

console.log('Tôi là: ' + firstName + ' ' + lastName); // ES5
console.log(`Tôi là: ${firstName} ${lastName}`); // ES6

//=====================================================================//

// LÀM VIỆC VỚI CHUỖI

var myString = 'Hoc JS tai F8!';

// Keyword: Javascript string methods

// 1. Length
console.log(myString.length);

// 2. Find Index
console.log(myString.indexOf('JS', 1)); // thêm tham số ở sau để set vị trí bắt đầu (khác với .search())

// 3. Cut string
console.log(myString.slice(-3, -1));

// 4. Replace
console.log(myString.replace(/JS/g, 'JavaScript')); // ví dụ về biểu thức chính qui

// 5. Convert to Uppercase
console.log(myString.toUpperCase());

// 6. Convert to Lowercase
console.log(myString.toLowerCase());

// 7. Trim (loại bỏ kí tự khoảng cách từ spacebar)
console.log(myString.trim().length); // Khác với myString.length

// 8.Split

var languagues = 'JavaScript, PostgreSQL, Java';

console.log(languagues.split(', '));

// 9. Get a character by index
const myString2 = 'Xuan Tong';

console.log(myString2.charAt(10));
console.log(myString2[8]);


//=====================================================================//

/**
 * Kiểu số (Number) trong JS
 * 
 * 1. Tạo giá trị Number
 *  - Các cách tạo
 *  - Dùng cách nào? Tại sao?
 *  - Kiểm tra data type
 * 
 * 2. Làm việc với Number
 *  - toString
 *  - toFixed
 */

var age = 18;
var PI = 3000.1894789147892759;

var result = 20 / "ABC";

console.log(isNaN(result)); // Check xem có phải hàm trên thuộc NaN 

console.log(typeof result.toString());

console.log(PI.toFixed(4)); // mọi tham số đều thành string (rút gọn số sau dấu phẩy, làm tròn trong toán học)

//=====================================================================//

/** 
 * Mảng trong JS - Array
 * 
 * 1. Tạo mảng
 *  - Cách tạo
 *  - Sử dụng cách nào? Tại sao?
 *  - Kiểm tra data types?
 * 
 * 2. Truy xuất mảng
 *  - Độ dài mảng
 *  - Lấy phần tử theo index
 */

var languagues = [
  'Javascript',
  'PostgreSQL',
  'Java',
  null,
  function() {

  },
  'MixiAhihi'
];

console.log(languagues);


var languagues = new Array(
  'Javascript',
  'PostgreSQL',
  'Java',
  null,
  function() {
  },
  'MixiAhihi'
); // not recommended

// Kiểm tra Array
console.log(Array.isArray(languagues));
console.log(Array.isArray({}));

var languagues2 = [
  'Javascript',
  'PostgreSQL',
  'Java',
]
console.log(languagues2.length); // Độ dài cả mảng
console.log(languagues2[1]); // Lấy phần tử trong mảng