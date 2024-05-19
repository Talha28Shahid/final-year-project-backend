const express = require('express')
const app = express()
const port = 3000
const data = require("./models/universitydata.js")
const detaildata = require("./models/unidetaileddata.js")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// connectin data base test
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
 
// fixing cross route problems
const cors = require('cors');
// Enable CORS for all routes
app.use(cors());

// getting data from collection datas(collection1)
app.get('/datas',async (req, res) => {
  let datas = await data.find()
  res.send(datas)
})

// getting data from detaildatas(collection2)
app.get('/detaildatas',async (req, res) => {
  let detailedatas = await detaildata.find()
  res.send(detailedatas)
})

