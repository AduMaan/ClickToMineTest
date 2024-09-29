const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TOKEN' with your bot's token
const token = '7743994344:AAHtjvWepV_NBQxWn2JYkt3FzeOzBKstq4c';
const bot = new TelegramBot(token, { polling: true });


// Listen for "/start" command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const gameLink = "https://adumaan.github.io/ClickToMineTest/"; // Replace with your game link

    bot.sendMessage(chatId, `Welcome! Play the game here: ${gameLink}`);
});

