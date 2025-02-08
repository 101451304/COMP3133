const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  
const Employee = require('../models/Employee');  

const resolvers = {
  Query: {
    login: async (_, { username, password }) => {
      // Find user by username
      const user = await User.findOne({ username });
      if (!user) throw new Error('User not found');
      
      // Compare password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');
      
      // Return JWT token upon successful login
      return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    },
    
    getAllEmployees: async () => await Employee.find(),
    
    searchEmployeeByEid: async (_, { eid }) => {
      // Check if 'eid' matches the 'eid' field in Employee
      return await Employee.findOne({ eid });
    },
    
    searchEmployeeByDesignationOrDepartment: async (_, { designation, department }) => {
      let query = {};
      if (designation) query.designation = designation;
      if (department) query.department = department;
      return await Employee.find(query);
    }
  },
  
  Mutation: {
    signup: async (_, { username, email, password }) => {
      // Encrypt password before saving the user
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      return await User.create({ username, email, password: hash });
    },
    
   
        addNewEmployee: async (_, { first_name, last_name, email, gender, designation, salary, date_of_joining, department, employee_photo }) => {
          // Check if the email already exists
          const existingEmployee = await Employee.findOne({ email });
          if (existingEmployee) {
            throw new Error('Email already exists');
          }
    
          // Generate a unique eid
          const timestamp = Date.now();  // Current timestamp
          const eid = `${first_name.charAt(0)}${last_name.charAt(0)}-${timestamp}`;  // Example: JD-1673036275209
    
          const newEmployee = await Employee.create({
            first_name,
            last_name,
            email,
            gender,
            designation,
            salary,
            date_of_joining,
            department,
            employee_photo,
            eid
          });
          return newEmployee;
        },
    
    updateEmployeeByEid: async (_, { eid, ...updates }) => {
      // Update employee by eid
      return await Employee.findOneAndUpdate({ eid }, updates, { new: true });
    },
    
    deleteEmployeeByEid: async (_, { eid }) => {
      // Delete employee by eid
      const deletedEmployee = await Employee.findOneAndDelete({ eid });
      return deletedEmployee ? 'Employee deleted' : 'Not found';
    }
  }
};

module.exports = resolvers;
