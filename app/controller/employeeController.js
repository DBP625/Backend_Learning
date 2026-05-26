import Employee from "../models/employeeModel.js"; 


//Model is imported as uppercase to follow naming convention

export const createEmployee = async (req, res) => {
    try {
        const result = await Employee.create(req.body);
        res.status(201).json({message: 'Employee created Successfully'});
    } catch (error) {
        res.status(500).json({message: 'Failed to create Employee'});
    }
}

// Read All
export const getEmployee = async (req, res) => {
    try {
        const result = await Employee.find({});
        res.status(200).json({message: 'Employee fetched Successfully' , data:result });
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch Employee'});
    }
}

// Read One

export const getEmployeeById = async (req , res) => {
    try {
        const result = await Employee.findById(req.params.id);
        res.status(200).json({message: 'Employee fetched By Id Successfully' , data: result});
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch Employee By Id'});
    }
}


// Update

export const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Employee.findByIdAndUpdate(id , req.body);
        res.status(200).json({message: 'Employee updated Successfully' , data: result});
    } catch (error) {
        res.status(500).json({message: 'Failed to update Employee'});
    }
}

// Delete

export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Employee.findByIdAndDelete(id);
        res.status(200).json({message: 'Employee deleted Successfully' , data: result});
    } catch (error) {
        res.status(500).json({message: 'Failed to delete Employee'});
    }
}

