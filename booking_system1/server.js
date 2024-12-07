// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bookingRoutes = require('./routes/bookingRoutes');

// Tạo ứng dụng Express
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Kết nối MongoDB
mongoose.connect('mongodb+srv://tien100609:t6IhLPF8tnoCg8Dq@cluster0.zr6da.mongodb.net/BookingDB');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Lỗi kết nối MongoDB:'));
db.once('open', () => {
    console.log('Kết nối MongoDB thành công!');
});

// Sử dụng các routes
app.use(bookingRoutes);

// Chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});