const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

connectDB();
const port = process.env.PORT;

app.use('/api',require('./routes/route'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set production'))
  }


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})