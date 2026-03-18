// const student = {
//     Name : "Gauarv Singh",
//     marks : 96,
//     printMarks: function(){
//         console.log("Marks = ",this.marks);
//     },
// };

const employee = {
    calcTax(){
        console.log("tax arte is 10%");
    },
};

const karan = {
    salary: 5000
};

const arjun = {
    salary: 5000
};

const om = {
    salary: 5000
};

const namo = {
    salary: 5000
};

karan.__proto__ = employee;
arjun.__proto__ = employee;
om.__proto__ = employee;
namo.__proto__ = employee;