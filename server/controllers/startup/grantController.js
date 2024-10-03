const Grant = require('../../models/Grant');

// Apply for Grant/EIR
exports.applyGrant = async (req, res) => {
    try {
        const { startupId, type } = req.body;
        const grant = new Grant({ startup: startupId, type });
        await grant.save();
        res.status(201).json(grant);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
