const Notification = require("../../models/Notification");

// Get all notifications
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// Add a notification
exports.addNotification = async (req, res) => {
    const { title, message } = req.body;

    try {
        const newNotification = new Notification({
            title,
            message,
            date: new Date()
        });

        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(500).json({ error: "Failed to add notification" });
    }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
    const { id } = req.params;

    try {
        await Notification.findByIdAndDelete(id);
        res.status(200).json({ message: "Notification deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete notification" });
    }
};
