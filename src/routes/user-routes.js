const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const auth = require('../middlewares/auth');

router.get('/',auth, controller.get);
router.get('/:id',auth, controller.getById);
router.post('/',auth, controller.post);
router.put('/:id',auth, controller.put);
router.delete('/:id',auth, controller.delete);


module.exports = router;