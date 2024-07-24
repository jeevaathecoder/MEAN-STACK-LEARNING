
const db = require('../model/db')

const addStudent = async (req, res) => {
  try {
    const { name, email, dept, clg } = req.body;

    const asdf = await db.query(
      "insert into student (name,email,dept,clg) values ($1,$2,$3,$4)"
      , [name, email, dept, clg]);


    res.status(200).json("Student Added Successfully")
  }
  catch (error) {
    console.log(error)
  }
}

const getStudents = async (req, res) => {
  try {
    const result = await db.query('select * from student');
    res.status(200).json(result.rows)
  } catch (error) {
    console.log(error)
  }
}

const getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query("select * from student where id=$1", [id])

    res.status(200).json(result.rows)
  }
  catch (e) {
    console.log(e)
  }
}


const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { name, email, dept, clg } = req.body;
    const query = await db.query("update  student set name=$1,email=$2,dept=$3,clg=$4 where id=$5", [name, email, dept, clg, studentId])
    res.status(200).send("Student Updated Sucessfully")
  }
  catch (error) {
    console.log(error)
  }
}

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const query = await db.query("delete from student where id=$1 ", [studentId]);
    res.status(200).send("student Deleted Sucessfully")
  }

  catch (error) {
    console.log(error)
  }
}
module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
}