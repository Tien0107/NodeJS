require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/services', require('./routes/services'));
app.use('/reservations', require('./routes/reservations'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
