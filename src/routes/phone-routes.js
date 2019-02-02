const express = require('express');
const router = express.Router();
const controller = require('../controllers/phone-controller');
const auth = require('../middlewares/auth');

router.get('/',auth, controller.get);
router.get('/:id',auth, controller.getById);
router.get('/:userId',auth, controller.getAllByIdUser);
router.post('/',auth, controller.post);
router.put('/:id',auth, controller.put);
router.delete('/:id',auth, controller.delete);


module.exports = router;