const Startup = require('../../models/startup');

// Submit KYC
exports.submitKYC = async (req, res) => {
    try {
        const { companyName, address, contact, email } = req.body;
        const startup = new Startup({ companyName, address, contact, email });
        await startup.save();
        res.status(201).json(startup);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Submit progress
exports.submitProgress = async (req, res) => {
    try {
        const { id } = req.params;
        const { milestone, status } = req.body;
        const startup = await Startup.findById(id);
        startup.progress.push({ milestone, status });
        await startup.save();
        res.status(200).json(startup);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
