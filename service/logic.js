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

module.exports={
    allEmployee,
    addEmployee
}