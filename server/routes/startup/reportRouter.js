const express = require("express");
const router = express.Router();
const { submitReport, upload } = require("../../controllers/startup/reportsController"); // Adjust the path as needed

// Route to submit a report
router.post("/submit", upload, submitReport); // 'reportFile' is the name of the input field for the file

module.exports = router;
