const express = require('express');
const { applyGrant } = require('../../controllers/startup/grantController');
const router = express.Router();

router.post('/apply', applyGrant);   // Apply for Grant/EIR

module.exports = router;
