
//import express
const express= require('express')

//server creation
const server=express()


//import cors
const cors=require('cors')

//import logic file
const logic=require('./service/logic')

//connect with front-end
server.use(cors({orgin:'http://localhost:3000'}))

//to conver data 
server.use(express.json())

//set port for run server
server.listen(8000,()=>{
    console.log("server started at port 8000");
})


server.get('/getAllEmployee',(req,res)=>{
         logic.allEmployee().then(result=>{
            res.status(result.statusCode).json(result)
         })
}) 


//add new employee
server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id, req.body.uname, req.body.age, req.body.designation, req.body.salary).then(result=>{
       res.status(result.statusCode).json(result)
    })
}) 