let rp = require('request-promise');

const TwitterApi = require('twitter-api-v2').TwitterApi;

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

module.exports = {
  count: function() {
    return twitterClient.v2.me({ "user.fields": "public_metrics" }).then(userData => userData.data.public_metrics.followers_count);
  }
};
