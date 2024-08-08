// // 1-masala
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function ArraySum(arg) {
//     if (arg.length <= 0) {
//         return [];
//     }
//     let sum = 0;
//     arg.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(ArraySum(array));

// // 2-masala
// let str = 'hello world';
// function unliHarflar(arg) {
//     let arr = arg.split('').filter(i => (i === 'a' || i === 'o' || i === 'i' || i === 'e' || i === 'u' || i === 'A' || i === 'O' || i === 'I' || i === 'E' || i === 'U') );
//     return arr;
// }
// console.log(unliHarflar(str));

// // 3-masala
// let str = 'Hello world';

// function WordSum(str) {
//     if (str.length === 0) {
//         return console.log('Matnni kiriting!');
        
        
//     } else {
//         let arr = str.split(' ');
//         return arr.length;
//     }
    
// }
// console.log(WordSum(str));

// // 4-masala
// let num = 5;
// function fac(num) {
//     let res = 1;
//     for (let i = 1; i <= num; i++) {
//         res *= i;
//     }
//     return res;
// }
// console.log(fac(num));

// // 5-masala
// let array = [1, 2, 3, 27, 4, 5, 6, 7];
// function maxArray(arg) {
//     let res = Math.max(...arg);
//     return res;
// }
// console.log(maxArray(array));

// // 6-masala
// let str = 'hello World';

// function revarseStr(str) {
//     let res = str.split('').reverse().join('');
//     return res;
// }
// console.log(revarseStr(str));

// // 7-masala
// let num = 1234567;

// function NamberSum(num) {
//     let sum = 0;
//     let res = num.toString().split('');
//     res.forEach(element => {
//         sum += element * 1;
//     });
//     return sum;
// }
// console.log(NamberSum(num));

// // 8-masala
// let str = 'hello 12345 world 678';
// function SumNamber(namber) {
//     let sum = 0;
//     let arr = namber.split('');
//     let res = arr.filter(num => num >= 0 || num < 0).filter(num => num !== ' ');
//     return res.length;
// }
// console.log(SumNamber(str));

// // 9-masala
// let num = [1, 2, 3, 4, 5, 6];

// function sortArr(arg) {
//     let res = arg.sort(function(a, b) {
//         return b - a;}) 
//         return res;
// }
// console.log(sortArr(num));

// // 10-masala
// let string = 'salom bolalar';
// let str = 'a';

// function logStr(str, arg) {
//     if (str === " " || str == " ") {
//         return [];
//     }
//     let arr = str.replaceAll(arg, '');
//     return arr;
// }
// console.log(logStr(string, str));







