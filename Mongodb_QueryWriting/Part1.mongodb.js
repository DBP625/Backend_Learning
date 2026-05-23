use("mongo-practice");

//Database Creation
// db.createCollection("users")

//db.createCollection("employees");

//Inseting One entry
/*
db.users.insertOne({
  name: "Denesh",
  age: 23,
  identity: "Bangladeshi",
});
*/

//Inserting Mutiple Entry
/*
db.employees.insertMany([
    {
        name: "Jane Smith",
        age: 30 ,
        department: "IT",
        salary: 70000,
        hireDate: new Date("2019-03-10"),
        city: "San Fransisco"

    },
    {
        name: "Michael Jhonson",
        age: 35 ,
        department: "Project Manager",
        salary: 90000,
        hireDate: new Date("2020-04-12"),
        city: "Chicago"
    }
])
*/

//Read/Find Documents
db.employees.find();
