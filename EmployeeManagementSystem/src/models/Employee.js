const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  designation: String,
  salary: Number,
  date_of_joining: String,
  department: String,
  employee_photo: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
