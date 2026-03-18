// const student = {
//     Name : "Versha Shrama",
//     roll : 468,
//     marks : 10,
//     printMarks: function(){
//         console.log('marks = ', this.marks);
//     },
// };
const employee = {
    calcTax(){
        console.log('Tax rate is 10 %');
    },
    clacTax1 : function(){
        console.log('Tax rate is 10 %');  //First and second both are same things.
    },
};

const karanArjun = {
    salary : 5000,
};

const karanArjun1 = {
    salary : 5000,
};

const karanArjun2 = {
    salary : 5000,
};

const karanArjun3 = {
    salary : 5000,
};

karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;