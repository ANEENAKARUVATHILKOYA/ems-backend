const db=require('./db')


 const allEmployee=()=>{
    return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}


//logic for addemployee
const addEmployee=(id,uname,age,designation,salary)=>{
   return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"Error! employee already exist"
            }
        }
        else{
            //create new object for new employee
            const newEmp = db.Employee({
                id,
                uname,
                age,
                designation,
                salary
            })

            newEmp.save()
            return{
                statusCode:200,
                message:"New employee added successfully"
            }
        }
    })
}


//logic for delete employee
const removeEmp=(eid)=>{
   return   db.Employee.deleteOne({id:eid}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"Employee deleted"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Error! employee not exist"
            }
        }
    })
}

//logic for edit the detatailes of an employee
const getAnEmp=(id)=>{
    return   db.Employee.findOne({id}).then(result=>{
          if(result){
            return{
                statusCode:200,
                employee:result
            }
          }
          else{
            return{
                statusCode:404,
                message:"Error! employee not exist"
            }
          }
     })
}

const editEmp=(id,uname,age,desig,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.age=age
            result.designation=desig
            result.salary=salary

            result.save()
            return{
                 statusCode:200,
                 message:'employee data updated'
            }
        }
        return{
            statusCode:404,
            message:'Error! employee not present '
        }
    })
}


module.exports={
    allEmployee,
    addEmployee,
    removeEmp,
    getAnEmp, editEmp
}