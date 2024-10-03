const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    progress: [{ milestone: String, status: String }],  // Progress tracking
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }]  // Report references
}, { timestamps: true });

module.exports = mongoose.model('Startup', startupSchema);