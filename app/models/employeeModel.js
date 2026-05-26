// name , city , designation , salary , created_at , updated_at

// Schema for Employees

import mongoose from 'mongoose';

// const employeeSchema = new mongoose.Schema({});

const employeeSchema = new mongoose.Schema({
    name: {type: String , required: true},
    city: {type: String , required: true},
    designation: {type: String , required: true},
    salary: {type: Number , required: true},
}, {timestamps: true , versionKey: false});

//Employee-Schema to Employee-Model
export default mongoose.model('employees' , employeeSchema);


