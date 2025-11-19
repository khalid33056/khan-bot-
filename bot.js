const TelegramBot = require('node-telegram-bot-api');

// ✅ Your BotFather token
const token = '8484243942:AAEdW8d0Nd3jOznmEfjg5Qsct3CghWb9O1E';

// Polling method
const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || msg.from.first_name;

  // Image link (welcome banner)
  const photoUrl = 'https://iili.io/fd4IiZJ.png';

  // Stylish detailed welcome message
  const welcomeText = `
♻️*Welcome ${username} to Reward Saga!*♻️

🎮 *Game Instructions:*
- 🟢 Open the Game to earn your tickets and rewards.
- ☘️ Complete daily tasks and promo codes.
- 💚 Invite friends to get extra tickets.
- ♻️ Join the Giveaway and win big prizes.

💡 *Tip:* Keep checking your profile to track your Tickets and Profit.

Let's start your journey! 🎉
`;

  // Send image + caption + buttons
  bot.sendPhoto(chatId, photoUrl, {
    caption: welcomeText,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🟢 Open Game',
            web_app: { url: 'https://studio-4944341573-fbece.web.app' } // Telegram WebApp URL
          }
        ],
        [
          {
            text: '☘️ Join Channel',
            url: 'https://t.me/Sagacommunity' // Telegram channel
          }
        ]
      ]
    }
  });
});
