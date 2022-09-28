const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema(
  {
    'Emp ID': {
      type: Number,
      required: true,
    },
    'Name Prefix': {
      type: String,
      required: true,
      unique: true,
    },
    'First Name': {
      type: String,
      required: true,
    },
    'Last Name': {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    'E Mail': {
      type: String,
      required: true,
    },
    "Father's Name": {
      type: String,
      required: true,
    },
    "Mother's Name": {
      type: String,
      required: true,
    },
    "Mother's Maiden Name": {
      type: String,
      required: true,
    },
    'Date of Birth': {
      type: String,
      required: true,
    },
    'Time of Birth': {
      type: String,
      required: true,
    },
    'Age in Yrs.': {
      type: Number,
      required: true,
    },
    'Weight in Kgs.': {
      type: Number,
      required: true,
    },
    'Date of Joining': {
      type: String,
      required: true,
    },
    'Quarter of Joining': {
      type: String,
      required: true,
    },
    'Half of Joining': {
      type: String,
      required: true,
    },
    'Year of Joining': {
      type: Number,
      required: true,
    },
    'Month of Joining': {
      type: Number,
      required: true,
    },
    'Month Name of Joining': {
      type: String,
      required: true,
    },
    'Short Month': {
      type: String,
      required: true,
    },
    'Day of Joining': {
      type: Number,
      required: true,
    },
    'DOW of Joining': {
      type: String,
      required: true,
    },
    'Short DOW': {
      type: String,
      required: true,
    },
    'Age in Company (Years)': {
      type: Number,
      required: true,
    },
    Salary: {
      type: Number,
      required: true,
    },
    'Last % Hike': {
      type: String,
      required: true,
    },
    SSN: {
      type: String,
      required: true,
    },
    'Phone No. ': {
      type: String,
      required: true,
    },
    'Place Name': {
      type: String,
      required: true,
    },
    County: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    Zip: {
      type: Number,
      required: true,
    },
    Region: {
      type: String,
      required: true,
    },
    'User Name': {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('employee', employeeSchema);
