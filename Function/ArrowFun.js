// A function is a block of code that reduces repetition in a program.
console.log("Hello");

// Unparametrized Function.

// function abc(){
//     console.log("Hyy Function 1")
// }
// abc();

// Named function

// const temp = function abc(){
//     console.log("Hyy Function 2");
// }
// temp();

// UnNamed function

// const temp = function (){
//     console.log("Hyy Function 3");
// }
// temp();

// Arrow Function.

// const temp =()=>{
//     console.log("Hyy Function 4")
// }
// temp();

// const Avg = (marks) => {
//     let sum = 0;

//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }

//     return sum / marks.length;
// }

// const marks = [10, 20, 30, 40, 50];

// console.log("The Avg marks of student is :", Avg(marks));

// Object of fruits

// const fruits = {
//     apple: {
//         color: "Red",
//         taste: "Sweet",
//         price: 120,
//         season: "Winter"
//     },
//     banana: {
//         color: "Yellow",
//         taste: "Sweet",
//         price: 60,
//         season: "All season"
//     }
// };

// console.log(fruits.apple.color);   
// console.log(fruits.apple.price);  

// const fruit = {
//     name: "Apple",
//     color: "Red",
//     price: 120
// };

// for (const key in fruit) {
//     console.log(`${key} : ${fruit[key]}`);
// }

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// let a = process.argv[2];
// let b = process.argv[3];

// let e = Number(a) + Number(b);

// console.log(`The value of addition is ${e}`);

let a = process.argv[0];
let b = process.argv[1];

let e = Number(a) + Number(b);
console.log(a);
console.log(b)