let student = {
    Name : "Gaurav Singh",
    roll : 2400320100468,
    num : 8810892922,
};

document.writeln("The type of student is : ",typeof student, "<br>");

for(let i in student){
    document.writeln(i + " : "+ student[i] + " <br>");
}