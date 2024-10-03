const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

    startup: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup' },
    title: { type: String, required: true },
    month: { type: String, required: true },
    reportFile: { type: String, required: true }  // Path to the uploaded file
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
