const MoneyEntry = require('../models/MoneyEntry');

exports.addMoneyEntry = async (req, res) => {
  try {
    const entry = new MoneyEntry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMoneyEntry = async (req, res) => {
  const { entryId } = req.params;

  try {
    const entry = await MoneyEntry.findByIdAndDelete(entryId);
    if (!entry) {
      return res.status(404).json({ error: 'money entry not found' });
    }
    res.json({ message: 'money entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoneyEntry = async (req, res) => {
  try {
    const fuelEntries = await MoneyEntry.find();
    res.json(fuelEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};