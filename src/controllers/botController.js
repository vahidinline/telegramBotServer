const TelegramBot = require('node-telegram-bot-api');
const User = require('../models/User');
const Activity = require('../models/Activity');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

const logActivity = async (telegramId, action, data) => {
  try {
    await Activity.create({ telegramId, action, data });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
};

exports.initializeBot = () => {
  bot.on('message', async (msg) => {
    try {
      const user = await User.findOneAndUpdate(
        { telegramId: msg.from.id.toString() },
        {
          username: msg.from.username,
          firstName: msg.from.first_name,
          lastName: msg.from.last_name,
          lastInteraction: new Date()
        },
        { upsert: true, new: true }
      );

      await logActivity(msg.from.id.toString(), 'message', {
        text: msg.text,
        messageId: msg.message_id
      });

      bot.sendMessage(msg.chat.id, `Received your message: ${msg.text}`);
    } catch (error) {
      console.error('Error handling message:', error);
    }
  });

  bot.on('callback_query', async (callbackQuery) => {
    try {
      await logActivity(callbackQuery.from.id.toString(), 'callback_query', {
        data: callbackQuery.data
      });
    } catch (error) {
      console.error('Error handling callback query:', error);
    }
  });
};

exports.bot = bot;