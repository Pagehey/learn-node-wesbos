const express = require('express');
const router  = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');

// controller imports
const storeController = require('../controllers/storeController');

// router.get('/', storeController.homePage);
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.newStore);
router.post('/add', storeController.storeParams, catchErrors(storeController.createStore));


module.exports = router;
