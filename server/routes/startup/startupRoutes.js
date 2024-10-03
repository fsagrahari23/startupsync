const express = require('express');
const { submitKYC, submitProgress } = require('../../controllers/startup/startupController');
const router = express.Router();

router.post('/kyc', submitKYC);         // Submit KYC
router.post('/progress/:id', submitProgress);  // Submit progress

module.exports = router;
