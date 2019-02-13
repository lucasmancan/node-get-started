const express = require('express');
const router = express.Router();
const controller = require('../controllers/city-controller');
const auth = require('../middlewares/auth');

router.get('/',auth, controller.get);
router.get('/:id',auth, controller.getById);
router.get('/state/:id',auth, controller.getByState);
router.post('/',auth, controller.post);
router.put('/',auth, controller.put);
router.delete('/:id',auth, controller.delete);


module.exports = router;