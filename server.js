require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.body)
  next()
})
app.use(cors())

mongoose.connect(process.env.MONGO_URI), {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connection.once('connect', () => {
  console.log('Connected to MongoDB')
})

app.get('/', (req, res) => {
  res.send(`<h1>pngcat</h1>`)
})





app.listen(PORT, () => console.log('API Server: Listening on ', PORT))