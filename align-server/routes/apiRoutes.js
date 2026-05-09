const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// 1. HEALTH CHECK: Date & Status
router.get('/health', mainController.getHealth);

// 2. WEATHER API: (Class Code-Along)
router.get('/weather/:zip', mainController.getWeatherByZip);

// 3. OUTSIDE API: (Classwork Assignment)
// router.get('/external', mainController.getOutsideData);

module.exports = router;