const express = require('express');
const { addMoneyEntry,  deleteMoneyEntry, getMoneyEntry } = require('../controllers/moneyEntryController');
const router = express.Router();

router.get('/', getMoneyEntry);
router.post('/', addMoneyEntry);
router.delete('/:entryId', deleteMoneyEntry);

module.exports = router;