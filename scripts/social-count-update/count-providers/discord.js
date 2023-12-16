const rp = require('request-promise');

module.exports = {
    count: function() {
        let opts = {
            uri: 'https://discordapp.com/api/v6/guilds/346672255084003329?with_counts=true',
            json: true,
            headers: {
                'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
            }
        };

        return rp.get(opts).then(json => json.approximate_member_count);
    }
}
