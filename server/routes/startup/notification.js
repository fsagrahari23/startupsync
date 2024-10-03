const express = require('express');
const { sendNotification } = require('../../controllers/startup/notificationController');
const router = express.Router();

router.post('/', sendNotification);   // Send notification

module.exports = router;
