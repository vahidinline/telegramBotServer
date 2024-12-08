const User = require('../models/User');
const Activity = require('../models/Activity');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ telegramId: req.params.telegramId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ telegramId: req.params.telegramId });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};