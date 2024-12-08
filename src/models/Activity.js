const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  telegramId: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  data: mongoose.Schema.Types.Mixed,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Activity', activitySchema);