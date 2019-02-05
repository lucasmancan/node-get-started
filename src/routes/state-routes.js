const express = require('express');
const router = express.Router();
const controller = require('../controllers/state-controller');
const auth = require('../middlewares/auth');

router.get('/',auth, controller.get);
router.get('/:id',auth, controller.getById);
router.get('/country/:id',auth, controller.getByCountry);
router.post('/',auth, controller.post);
router.put('/',auth, controller.put);
router.delete('/:id',auth, controller.delete);


module.exports = router;