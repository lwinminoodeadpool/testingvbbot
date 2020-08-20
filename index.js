'use strict';
 
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const express = require('express');
const app = express();
const TextMessage = require('viber-bot').Message.Text;
const UrlMessage = require('viber-bot').Message.Url;
const ContactMessage = require('viber-bot').Message.Contact;
const PictureMessage = require('viber-bot').Message.Picture;
const VideoMessage = require('viber-bot').Message.Video;
const LocationMessage = require('viber-bot').Message.Location;
const StickerMessage = require('viber-bot').Message.Sticker;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const requestify = require('requestify');
 
const bot = new ViberBot({
    authToken: "4c01801e30a7d390-8be79aa6c7d509e9-67a3d5dc8768c9a5",
    name: "LMO bot",
    avatar: "https://townsquare.media/site/442/files/2017/09/arrow-season-6-deathstroke-rights-pic.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

// 
 
// Perfect! Now here's the key part:
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // Echo's back the message to the client. Your bot logic should sit here.
    response.send(message);
});
 
// Wasn't that easy? Let's create HTTPS server and set the webhook:
const https = require('https');
const port = process.env.PORT || 8080;
 
// Viber will push messages sent to this URL. Web server should be internet-facing.
const webhookUrl = process.env.WEBHOOK_URL;
 
const httpsOptions = {
    key: ...,
    cert: ...,
    ca: ...
}; // Trusted SSL certification (not self-signed).
https.createServer(httpsOptions, bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));