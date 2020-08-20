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
let port = process.env.PORT || 3000;
// webhook connect 
app.use("/viberbot", bot.middleware());
app.listen(port, () => {
    bot.setWebhook(`https://iber-bot-test.herokuapp.com/viberbot`).catch(e => {
        console.log(e);
    });
});
bot.on(BotEvents.CONVERSATION_STARTED, (userProfile, isSubscribed, context, onFinish) => {
    userProfile = userProfile.userProfile;
    bot.sendMessage(userProfile, new TextMessage('FNI Insurance မှကြိုစိုပါသည်။ စမည်ကိုနှိပ်ပေးပါ', {
            Type: "keyboard",
            BgColor: "#000000",
            DefaultHeight: false,
            Buttons: [{
                Columns: 6,
                Rows: 1,
                BgColor: "#ffffff",
                ActionType: "reply",
                ActionBody: 'Hi',
                Text: `<font color='#000000'>စမည်</font>`,
            }]
        },
        "",
        "",
        "",
        7
    )).catch(er => console.log(er))
  });
// Perfect! Now here's the key part:
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // Echo's back the message to the client. Your bot logic should sit here.
    response.send(message);
});

