const express = require('express');
const commentController = require('./comment.controller.js');
const router = express.Router();

router.get('/',commentController.getAll);
router.get('/:id',commentController.getById);
router.post('/',commentController.create);
router.put('/:id',commentController.update);
router.delete('/:id',commentController.delete);

module.exports = router;