let student = {
    name: "Ram",
    age: 20,
    department: "AIDS",
    college: "ABC College"
};

console.log("Object properties:");
for (let key in student) {
    console.log(key + " : " + student[key]);
}

delete student.age;


console.log("Length of object:", Object.keys(student).length);
