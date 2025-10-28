const express = require('express');
const userController = require('./user.controller.js');
const router = express.Router();

router.get('/',userController.getAll);
router.get('/:id',userController.getById);
router.post('/',userController.create);
router.put('/',userController.update);
router.delete('/',userController.delete);

module.exports = router;