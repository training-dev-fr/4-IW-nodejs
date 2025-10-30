const express = require('express');
const postController = require('./post.controller.js');
const log = require('../../middleware/log.js');
const router = express.Router();

router.get('/', log, postController.getAll);
router.get('/:id', log, postController.getById);
router.post('/', log, postController.create);
router.put('/:id', log, postController.update);
router.delete('/:id', log, postController.delete);

module.exports = router;