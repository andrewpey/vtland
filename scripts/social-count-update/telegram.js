const rp = require('request-promise');

module.exports = {
    send: function(message) {
        var data = {
            "chat_id": process.env.TELEGRAM_CHAT_ID,
            "text": message,
            "parse_mode": "Markdown",
            "disable_web_page_preview": true
        };

        var options = {
            uri: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            method: 'POST',
            form: data
        };

        return rp(options);
    }
};
