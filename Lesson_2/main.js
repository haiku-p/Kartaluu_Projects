/**
 * Toán tử gán
 * 
 * Toán tử          Ví dụ           Tương đương    
 * =                x = y             x = y
 * +=               x += y            x = x + y
 * -=               x -= y            x = x - y
 * *=               x *= y            x = x * y
 * /=               x /= y            x = x / y
 * **=              x **= y           x = x ** y
 */

var a = 9;

a += 10;

console.log(a);

//---------------------------------------------------------//

/**
 * Toán tử chuỗi - String Operator
 */

var lastName = "Luu";
var firstName = "Quoc Anh";

(function() {
  let name = "Bich";
  name += " Ngoc";
  console.log(name);
})();

console.log(lastName + " " + firstName);

//---------------------------------------------------------//

/**
 * Toán tử
 * 
 * ==             --> Bằng             
 * !=             --> Không bằng
 * >              --> Lớn hơn
 * <              --> Nhỏ hơn/
 * >=             --> Lớn hơn hoặc bằng
 * <=             --> Nhỏ hơn hoặc bằng
 * 
 */

var a = 9;
var b = 9;

if(a >= b){
  console.log('Dieu kien dung');
} else {
  console.log('Dieu kien sai');
}

//---------------------------------------------------------//

/**
 * Boolean
 */

var a = 9;
var b = 1;
var isSuccess = a > b;

console.log(isSuccess);

//---------------------------------------------------------//

/**
 * If - else
 */

/**
 * 0
 * false
 * '' - ""
 * undefined       --> Sẽ in ra điều kiện sai
 * NaN'
 * null
 */

var isSuccess = 8 > 2;

if(isSuccess) {
  console.log('Tin chuan em oi');
} else {
  console.log('Tin chua chuan roi');
}

//---------------------------------------------------------//

/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

if(a > 0 && b < 0 || c > 0){
  console.log('DIEU KIEN NOICE');
}

//---------------------------------------------------------//

/**
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * 
 *  - Number
 *  - String
 *  - Boolean
 *  - Undefined
 *  - Null
 *  - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 *  - Function
 *  - Object
 */

// Number type
var a = 1;
var b = 2;

console.log(typeof a);

// String type
var fullName = "Luu Quoc Anh";
console.log(typeof fullName);

// Boolean type
var isOk = true;

// Undefined type
var age;

// Null
var isNull = null; // --> means nothing

// Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique
/* console.log(id === id2); */

// Function

var myFunction = function(){
  alert("Hi, I am HKers");
}
/* myFunction(); */

// Object Types
var myObject = {
  name: "Quoc Anh",
  age: 26,
  city: "Ha Noi"
};
console.log('myObject: ', myObject);

var myArray = [
  'JavaScript',
  'PHP',
  'Python',
  'Java'
];

console.log('myArray: ', myArray);

//---------------------------------------------------------//

// Toán tử so sánh -P2 (So sánh tuyệt đối)

/**
 * ===
 * !==
 */

var a = 1;
var b = '1';

console.log(a == b); // != (a === b)

// Hiểu hơn về câu lệnh điều kiện và phép so sánh

var a = 1;
var b = 2;

var result = 'A' && NaN && 'C'

if(result){
  console.log('DIEU KIEN CHUAN');
} else {
  console.log('DIEU KIEN AO THAT DAY');
}
