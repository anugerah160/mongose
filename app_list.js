const mongoose = require('mongoose');
const Employee = require('./employee');
const uriku = require('dotenv').config();

const uri =  process.env.uriku;

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })