class Student {
  id;
  name;
  clg;


  constructor(student) {
    this.id = student.id;
    this.name = student.name;
    this.clg = student.clg;
  }
}

const newlyAddedStudnet = students.map((student) => {
  return new Student(student);

})

// const studnet1 = new Student(1, "Raj", "NGP");
// const studnet2 = new Student(2, "Kamal", "MIC");
// const studnet3 = new Student(3, "Jadu", "IIT");
// const studnet4 = new Student(4, "Ravi", "CIT");

const students = [{
  id: "44",
  name: "Leo",
  clg: "CIT"
},
{
  id: "33",
  name: "KING",
  clg: "MITT"
},
{
  id: "07",
  name: "DHONI",
  clg: "CIT"
},
{
  id: 9,
  name: "Karthi",
  clg: "CIT"
},

]

// console.log(studnet1)
// console.log(studnet2)
// console.log(studnet3)
// console.log(studnet4)



console.log(newlyAddedStudnet)