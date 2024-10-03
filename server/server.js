const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
// const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const startupRoutes = require('./routes/startup/startupRoutes');
const notificationRoutes = require('./routes/startup/notification');
const grantRoutes = require('./routes/startup/grantRoutes');

const Authrouter = require('./routes/auth/Auth-routes');
const reportRoutes = require("./routes/startup/reportRouter");


const app = express();

// Enable CORS for React frontend
app.use(cors({
  origin: 'http://localhost:5175',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization','Cache-Control'],
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5500;
// create a database connection 
mongoose.connect(`mongodb+srv://monu:monu@cluster0.iua2e.mongodb.net/bitNbuild`).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.log(err);
})
app.use('/api/auth', Authrouter);
app.use('/api/startups', startupRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/grants', grantRoutes);
app.use("/api/startup/reports", reportRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  