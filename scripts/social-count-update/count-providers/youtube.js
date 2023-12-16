const CHANNEL_ID = 'UCXJT6wEmzWD-g-J_FUhJMFw';
const rp = require('request-promise');

module.exports = {
    count: function() {
        let opts= {
            uri: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`,
            json: true
        };
        return rp.get(opts).then(response => parseInt(response.items[0].statistics.subscriberCount));
    }
}
