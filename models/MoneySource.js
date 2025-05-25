const mongoose = require('mongoose');

const MoneySourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String },
  description:  { type: String }
});

module.exports = mongoose.model('MoneySource', MoneySourceSchema);