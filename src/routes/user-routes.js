const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const auth = require('../middlewares/auth');

router.get('/',auth, controller.getById);
router.post('/', controller.post);
router.put('/',auth, controller.put);
router.delete('/:id',auth, controller.delete);
router.post('/profileImage/:id', auth, controller.updateProfileImage);
router.post('/coverImage/:id', auth, controller.updateCoverImage);


module.exports = router;