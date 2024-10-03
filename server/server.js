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
const notificationRouter = require("./routes/startup/notification");
const socketIO = require("socket.io");
const http = require("http");
const cron = require("node-cron");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

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

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
      console.log("Client disconnected");
  });

  socket.on("sendNotification", (data) => {
      io.emit("receiveNotification", data); // Broadcast the notification to all clients
  });
});
cron.schedule("0 9 * * *", async () => {
  console.log("Running cron job - Sending daily email reminders");

  // Prepare email
  const mailOptions = {
      from: process.env.EMAIL,
      to: 'WwU0r@example.com', // Target user or a list
      subject: "Daily Reminder from StartupSync",
      text: "This is a daily reminder to update your startup's progress!"
  };

  // Send email
  transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
          console.error("Error sending email", err);
      } else {
          console.log("Email sent: " + info.response);
      }
  });
});
const PORT = process.env.PORT || 5500;
// create a database connection 
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.log(err);
})
app.use('/api/auth', Authrouter);
app.use('/api/startups', startupRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/grants', grantRoutes);
app.use("/api/startup/reports", reportRoutes);
app.use("/api/notifications", notificationRouter);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  