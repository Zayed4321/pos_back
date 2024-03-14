const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/config.js");
const { getItemController, singleItemController, addItemController } = require('./controllers/itemController.js');
const PORT = process.env.PORT || 8080

// Rest Section 
const app = express();

// dotenv 
dotenv.config();

// db added
connectDB();

// middlewares

app.use(cors());
app.use(express.json())
app.use(express.json());

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req, res) => {
    res.send('Hello, world!'); // Respond with a simple message
});

// routes

app.get('/api/items/get-item', getItemController);

app.get('/api/items/get-item/:id', singleItemController);

app.post('/api/items//add-item', addItemController);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});

