const mongoose = require('mongoose');

const MoneyEntrySchema = new mongoose.Schema({
  source: { type: mongoose.Schema.Types.ObjectId, ref: 'MoneySource', required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  description: { type: String }
});

module.exports = mongoose.model('MoneyEntry', MoneyEntrySchema);