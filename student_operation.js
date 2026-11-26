// College Management Database using MongoDB

// Select the database
use("CollegeDB");

// SAMPLE DATA
// Run this insertMany command only if the collection is empty.
// Do not run it again because you have already inserted your records.

/*
db.Students.insertMany([
  {
    studentId: 101,
    name: "Arun",
    department: "ECE",
    year: 3,
    cgpa: 8.5
  },
  {
    studentId: 102,
    name: "Kiruthiga",
    department: "CSE",
    year: 2,
    cgpa: 9.1
  },
  {
    studentId: 103,
    name: "Karthick",
    department: "ECE",
    year: 3,
    cgpa: 8.2
  }
]);
*/

// Display all student records
db.Students.find();

// Find students from ECE department
db.Students.find({ department: "ECE" });

// Find students with CGPA greater than 8.5
db.Students.find({ cgpa: { $gt: 8.5 } });

// Update Kiruthiga's CGPA to 9.5
db.Students.updateOne(
  { studentId: 102 },
  { $set: { cgpa: 9.5 } }
);

// Delete Karthick's record
db.Students.deleteOne({ studentId: 103 });

// Display final student records
db.Students.find();
