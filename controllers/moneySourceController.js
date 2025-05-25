const MoneySource = require('../models/MoneySource');

exports.createMoneySource = async (req, res) => {
  try {
    const source = new MoneySource(req.body);
    await source.save();
    res.status(201).json(source);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMoneySource = async (req, res) => {
  try {
    const sources = await MoneySource.find();
    res.json(sources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMoneySource = async (req, res) => {
  const { sourceId } = req.params;

  try {
    const source = await MoneySource.findByIdAndDelete(sourceId);
    if (!source) {
      return res.status(404).json({ error: 'Source not found' });
    }
    res.json({ message: 'Source deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};