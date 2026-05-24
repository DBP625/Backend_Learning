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
// db.employees.find().pretty()

//Find with Condition
// db.employees.find({department: "IT"}).pretty()

//Find with Projection
//db.employees.find({} , {name:1 , city:1}).pretty()

//Update One Document
/*
db.employees.updateOne(
  { _id: ObjectId("6a11f18ab499ed80f585bed7") },
  {
    $set: {
      salary: 75000,
      city: "Dhaka",
    },
  },
);
*/

// db.employees.insertMany([
//     {
//         name: "Rabiul Alvi",
//         age: 34 ,
//         department: "Finance",
//         salary: 50000,
//         hireDate: new Date("2034-03-10"),
//         city: "Bogura"

//     },
//     {
//         name: "Chanky Riyard",
//         age: 57 ,
//         department: "Marketing",
//         salary: 34000,
//         hireDate: new Date("2020-04-12"),
//         city: "Chicago"
//     }
// ])

//Deletion
// db.employees.deleteOne(
//     { _id: ObjectId('6a12036303d4a18853e9d712')}
// )

//Aggregation Operations

// total Row Count
// db.employees.aggregate([
//     {$count: 'total'}
// ])

//Limiting Data
// db.employees.aggregate([{ $limit: 2 }]);

//Sorting Data

///Sorting Salary by Descending Order
// db.employees.aggregate([
//     {
//         $sort: {
//             salary: 1
//         }
//     }
// ])

///Sorting Salary by Ascending Order
// db.employees.aggregate([
//     {
//         $sort: {
//             salary: -1
//         }
//     }
// ])

//Filtering [Match Operator]

// $eq , $lt , $gt , $lte , $gte , $ne , $in , $nin, $and , $or , $not , $nor

// db.employees.aggregate([
//   {
//     $match: {
//       salary:{$gt:30000}
//     }
//   }
// ])

// db.employees.aggregate([
//   {
//     $match: {
//       salary:{$eq:50000}
//     }
//   }
// ])

db.employees.aggregate([
  {
    $match: {
      salary: { $gte: 50000 },
    },
  },
]);
