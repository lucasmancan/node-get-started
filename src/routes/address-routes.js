const express = require('express');
const router = express.Router();
const controller = require('../controllers/address-controller');
const auth = require('../middlewares/auth');

router.post('/', auth, controller.post);
router.delete('/:id',auth, controller.delete);


module.exports = router;