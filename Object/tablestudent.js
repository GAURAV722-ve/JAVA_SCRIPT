let student = [
  {
    Name: "Gaurav Singh",
    CGPA: 9.8,
    city: "Sultanpur",
  },
  {
    Name: "Versha Singh",
    CGPA: 9.52,
    city: "Ghaziabad",
  },
  {
    Name: "Rahul",
    CGPA: 1.5,
    city: "Delhi",
  },
  {
    Name: "Prateek",
    CGPA: 4.5,
    city: "Nodia",
  },
  {
    Name: "Durgesh",
    CGPA: 7.84,
    city: "Jaipur",
  },
  {
    Name: "Harsh Rajpoot",
    CGPA: 7.02,
    city: "Bihar",
  },
  {
    Name: "Amit",
    CGPA: 6.5,
    city: "Mumbai",
  },
];
console.table(student)
for (let i = 0; i < student.length; i++) {
    if (student[i].city === "Mumbai") {
        console.log(student[i]);
    }
    if (student[i].CGPA > 9) {
        console.log(student[i]);
    }
}
