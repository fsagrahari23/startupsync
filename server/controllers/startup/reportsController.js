const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const Report = require("../../models/Report");
require("dotenv").config(); // Load environment variables

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Setup Cloudinary storage using multer-storage-cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "reports",            // Folder name in Cloudinary
    allowed_formats: ["pdf"],      // Restrict to PDF files only
    resource_type: "raw",          // Ensure Cloudinary handles non-image files
  },
});

// Multer configuration for handling file uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 9 * 1024 * 1024 }, // Set maximum file size to 9MB
}).single("reportFile"); // Single file upload with 'reportFile' as the form field

// Controller to handle report submissions
const submitReport = async (req, res) => {
  try {
    // Ensure the file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Validate that the file is a PDF
    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF files are allowed" });
    }

    // Upload file to Cloudinary using Cloudinary's 'upload' method for raw files
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",  // Ensure it's treated as a raw file
      folder: "reports",     // Cloudinary folder
    });

    // Destructure required fields from the request body
    const { startup, title, month } = req.body;

    // Validate input fields
    if (!startup || !title || !month) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new report document in the database
    const newReport = new Report({
      startup,                      // Startup ID from the request body
      title,                        // Report title
      month,                        // Report month
      reportFile: result.secure_url, // Cloudinary URL of the uploaded PDF file
    });

    // Save the report to the database
    await newReport.save();

    // Respond with success and the report details
    res.status(201).json({
      message: "Report submitted successfully",
      report: newReport,
    });
  } catch (error) {
    // Handle server errors
    console.error("Error submitting report:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// Export the controller and upload middleware for use in routes
module.exports = {
  submitReport,
  upload,
};
