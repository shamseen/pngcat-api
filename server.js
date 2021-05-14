/* --- Required modules --- */
require('dotenv').config()          // inject .env into process.env
const express = require('express'); // http server
const cors = require('cors');       // expose resources for external websites
const mongoose = require('mongoose'); // talks to mongo db

/* --- App variables --- */
const app = express();
const PORT = process.env.PORT || 8000;

/* --- Connect to database --- */
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
// confirm connection
mongoose.connection.once('connected', () => console.log('>> mongoose is connected to mongoDB'));

/* --- Middleware for CRUD & controller routing --- */
app.use(express.json());       // reads incoming PUT/POST as json

app.use((req, res, next) => {
  console.log(req.body);      // logging the request
  next();                     // run next middleware func
});

app.use(cors());              // exposes endpoints for apps to request

/* --- Routes --- */
app.use('/pngcats', require('./controllers/pngcatsController'))

app.get('/', (req, res) => {
  res.send(`<h1>.pnGCAT API</h1>`)
})

/* --- Leggggoooooooo --- */
app.listen(PORT, () => console.log(`>> API Server: Listening on port ${PORT}. waiting for database...`))