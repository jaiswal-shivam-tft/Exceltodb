require('dotenv').config({ path: 'config.env' });
const express = require('express');
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const fs = require('fs');

const Model = require('./models/employeeModel');
const app = express();
app.use(express.json());
const file = xlsx.readFile('./test.xlsx');

const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
///////////////////////////////////////////////////
const wb = xlsx.readFile('./test.xlsx');
console.log(wb.SheetNames);
const ws = wb.Sheets['Hr1m'];
// //console.log(ws)
const data = xlsx.utils.sheet_to_json(ws);
// console.log(data);

// for (let i = 0; i < data.length; i++) {
//   datas = new Model(data[i]);

//   async function asyncCall() {
//     const dataToSave = await Model.insertMany(datas);
//     console.log(dataToSave);
//   }
//   asyncCall();
// }

let min = 0;
let max = 501;
while (min < data.length) {
  if (max > data.length) {
    max = data.length;
  }
  const slicedata = data.slice(min, max);
  async function asyncCall() {
    await Model.insertMany(slicedata);
  }
  asyncCall();
  min = max;
  max = max + 500;
}
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('err', (err) => {
  console.log(err);
});

database.once('connected', () => {
  console.log('Database Connected');
});
app.listen(port, () => {
  console.log(`server running at : ${port}`);
});
