const express = require('express');
const userController = require('./user.controller.js');
const router = express.Router();

router.get('/',userController.getAll);
router.get('/:id',userController.getById);
router.post('/',userController.create);
router.put('/:id',userController.update);
router.delete('/:id',userController.delete);

module.exports = router;