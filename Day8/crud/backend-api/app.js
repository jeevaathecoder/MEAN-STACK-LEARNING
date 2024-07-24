const express = require('express');
const controller = require('./service/studentService');
const app = express();
const bodyParser = require('body-parser');
const port = 3000


//Midlle Wares
app.use(bodyParser.urlencoded({ extended: true }));

//End Points
app.post("/add", controller.addStudent);
app.get("/", controller.getStudents);
app.get("/:id", controller.getStudentById);
app.put("/update/:id", controller.updateStudent);
app.delete("/delete/:id", controller.deleteStudent);

//Listening Port

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

