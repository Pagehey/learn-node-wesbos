const express = require('express');
const router  = express.Router();

// controller imports
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);

module.exports = router;
