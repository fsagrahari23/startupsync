const Notification = require('../../models/Notification');

// Send notification
exports.sendNotification = async (req, res) => {
    try {
        const { message, recipient } = req.body;
        const notification = new Notification({ message, recipient });
        await notification.save();
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
