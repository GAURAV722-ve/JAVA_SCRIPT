// let n = Number(prompt("Enter the marks"));
// if(n>=90 && n<=100){
//     console.log("A");
// }
// else if(n>=70 && n<=89){
//     console.log("B");
// }
// else if(n>=60 && n<=69){
//     console.log("C");
// }
// else if(n>=50 && n<=59){
//     console.log("D");
// }
// else if(n>=0 && n<=40){
//     console.log("F");
// }
// else {
//     console.log("You entered a wrong value.");
// }
// for(let i=0; i<5; i++){
//     console.log("Hello world.");
// }

// calculate sum of 1 to n numbers.
// let n = prompt("Enter Number(1 to n)."), sum = 0;
// for(let i=1; i<=n; i++){
//     sum +=i;
// }
// console.log("sum : ",sum);

// for of loop this loop is used for string and array.
// let str = "Gaurav Singh."
// for(let i of str){
//     console.log("i : ",i);
// }

// For in loop.

// let student ={
//     Fullname : "Gaurav Singh",
//     rollno : 2400320100468,
//     college : "ABES Engineering collge."
// };

// for (let key in student){
//     console.log("key ",key, " value ",student[key]);
// }

// Print 0 to 100 even number.
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Guess a number
// let a = prompt("Enter a guess number.");
// while(a!=25){
//     a = prompt("You entered a wrong number please re-ented the number.");
// }
// console.log("You ented a right number");

// let str = "Versha shrama";
// console.log(str[6]);

// A way to hava embedded expression in string.
// let str = `Versha is good girl and it got a markes ${20+10}`;
// console.log(str);

// Array.
// let a = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);

// let arr = [85,97,44,37,76,60],sum=0;
// for(let val of arr){
//     sum += val;
// }
// let res = sum/arr.length;
// console.log(`The Average markes of each student is ${res}`);

let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(2,2,"Ola");
console.log(arr);
arr.push("Amazon");
console.log(arr);