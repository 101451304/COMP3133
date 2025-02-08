const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
    created_at: String
    updated_at: String
  }
  
  type Employee {
    _id: ID!
    eid: String!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
    created_at: String
    updated_at: String
  }
  
  type Query {
  login(username: String!, password: String!): String
  getAllEmployees: [Employee]
  searchEmployeeById(id: ID!): Employee
  searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
  searchEmployeeByEid(eid: String!): Employee  # Add this line
}

  
  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    addNewEmployee(first_name: String!, last_name: String!, email: String!, gender: String!, designation: String!, salary: Float!, date_of_joining: String!, department: String!, employee_photo: String): Employee
    updateEmployeeByEid(eid: String!, first_name: String, last_name: String, email: String, gender: String, designation: String, salary: Float, date_of_joining: String, department: String, employee_photo: String): Employee
    deleteEmployeeByEid(eid: String!): String
  }
`;

module.exports = typeDefs;
