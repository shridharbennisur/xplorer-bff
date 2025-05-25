const express = require('express');
const { createMoneySource, getMoneySource, deleteMoneySource } = require('../controllers/moneySourceController');
const router = express.Router();

router.post('/', createMoneySource);
router.get('/', getMoneySource);
router.delete('/:sourceId', deleteMoneySource);

module.exports = router;