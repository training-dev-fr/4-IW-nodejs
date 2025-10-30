const express = require('express');
const roleController = require('./role.controller.js');
const auth = require('../auth/auth.middleware.js');
const hasRole = require('./hasRole.middleware.js');
const router = express.Router();

router.get('/',roleController.getAll);
router.get('/:id',roleController.getById);
router.post('/',auth,hasRole('ADM'), roleController.create);
router.put('/:id',roleController.update);
router.delete('/:id',roleController.delete);

module.exports = router;