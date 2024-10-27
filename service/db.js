//import mongoose
const mongoose=require('mongoose')

//integration
mongoose.connect('mongodb://localhost:27017/ems')



//model creation
const Employee=mongoose.model('employee',{
 id:String,
 uname:String,
 age:Number,
 designation:String,
 salary:Number
})

//export for access from other files
module.exports={
    Employee
}