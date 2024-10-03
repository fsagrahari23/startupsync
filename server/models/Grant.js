const mongoose = require('mongoose');

const grantSchema = new mongoose.Schema({
    startup: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup' },
    status: { type: String, default: 'Pending' },  // Status of the application
    type: { type: String, required: true }  // EIR or Grant type
}, { timestamps: true });

module.exports = mongoose.model('Grant', grantSchema);
