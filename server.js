const express = require('express');
const mongoose = require('mongoose');
let app = express();

// connect server to mongo server => local db
mongoose.connect("mongodb://0.0.0.0:27017/App",)
.then(() => console.log('DB now is connected'))
.catch( (err) => {console.error(err); });
const studentschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : String,
    address : String,
    age : Number,
    Bio : String,
 
});
// convert schema to node (class)
 
let studentmodel = new mongoose.model("Students", studentschema);

let userMohamed = new studentmodel({
    name : "mohamedkhaled",
    email : "mohamedkhaled@gmail.com",
    password : "710801%%#mc",
    phone : "01559264002",
    age : 21
 
}).save();



let userkhaled = new studentmodel({
    name : "khaled mohamed",
    email : "khaledmohamed@gmail.com",
    password : "0988$##@",
    phone : "012732937848",
    age :23 
 
}).save();

let useromar = new studentmodel({
    name : "omar mohamed",
    email : "omarmohamed@gmail.com",
    password : "090109-2e",
    phone : "0109187093",
    age:34 ,
    bio :"engineer" 
 
}).save();

const coursesschema = new mongoose.Schema({
    id : String,
    name : String,
    description: String,
    studentsEnteredThisCourse : String
 
});
 
let coursesmodel = new mongoose.model("Courses",coursesschema ); 



let course1 = new coursesmodel({
    name : "cs",
    id: "1",
    description: "computer science",
    studentsEnteredThisCourse: "28"
}).save();



let course2 = new coursesmodel({
    name : "network",
    id: "2",
    description: "basics network",
    studentsEnteredThisCourse: "23"
}).save();



let course3 = new coursesmodel({
    name : "database",
    id: "3",
    description: "basics database",
    studentsEnteredThisCourse: "30"
}).save();


app.get("/Students", async (req, res) => {
    let allstudents = await studentmodel.find();
    res.status(200);
    console.log(allstudents.length);
    res.json(allstudents);
  });
 
  app.get("/Courses", async (req, res) => {
    let allCourses = await coursesmodel.find();
    res.status(200);
    console.log(allCourses.length);
    res.json(allCourses);
  });




app.listen(3000,function () {
    console.log('server now is opend')
})