// Khai bao bien

var fullName = 'Luu Quoc Anh';
var age = 26;

// Goi ham thong bao
// alert(fullName);
// alert(age);

/**
 * Mot so ham built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */

// console.log(fullName);
// 
// confirm('Xac nhan ban du tuoi');

// prompt('Xac nhan ban du tuoi');

// setTimeout(function() {
  // alert('Thong bao')
// }, 1000)

// setInterval(function() {
  // console.log('Day la log ' + Math.random());
// }, 1000)

//-------------------------------------------------//

/**
 * Toan tu trong JS
 * 1. Arithmetic
 * 2. Assignment
 * 3. Comparison
 * 3. Logical
 */

var a = 1;
var b = 2;

// if(a < b){
  // alert('Dung');
// }

//-------------------------------------------------//

/**
 * +
 * -
 * *
 * **
 * /
 * %
 * ++
 * --
 */

// var a = 8;
// var b = 3;
// 
// var c = a % b;
// 
// console.log(c);

//-------------------------------------------------//

// Toan tu ++ --
// Prefix & Postfix

var a = 6;

// Cách tiền tố Prefix hoạt động
// Việc 1: + 1 cho a, a = a + 1 => a = 7
// Việc 2: Trả về a sau khi được + 1

var output = a++;

// Cách hậu tố Postfix hoạt động
// Việc 1: 'a copy', 'a copy' = 6
// Việc 2: trừ 1 của a, a = a - 1 => a = 5
// Việc 3: trả về 'a copy'

console.log('output: ', output);
console.log('a: ', a);

// Ví dụ thực tiễn:

var number = 6;

var output = number++ + --number;
// 6 + 6 chứ không phải 7 + 5
console.log('output2 : ', output);

var output = ++number * 2 + - number-- * 2;
// 7 * 2 - 7 * 2 (number + 1 rồi - đi cái copy của nó)
console.log('output3: ', output);