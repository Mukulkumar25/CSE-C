// const express = require('express');
import express from 'express';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send("Welcome to CSE-C, Students")
})
// app.get('/api', (req, res) => {
//   try {
//     const {name, rollno} = req.query;
//     if(!name){
//       // res.send({status: 404, message: "Please enter a name"})
//       res.status(404).send("Please enter a name");
//     }else{
//       res.send(`Welcome ${name}, your roll no : ${rollno}`);
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// })
app.get('/api/:name/:rollno', (req, res) => {
  try {
    const data = req.params;
    res.send(`Welcome ${data.name}, your roll no : ${data.rollno}`);
    
  } catch (error) {
    console.log(error.message);
  }
})

app.listen(port, ()=>{
  console.log(`Server is running at http://localhost:${port}`);
});
