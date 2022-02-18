const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

connectDB();
const port = process.env.PORT;

app.use('/api',require('./routes/route'))


app.use("/",express.static(path.join(__dirname, '../frontend/build')));


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})