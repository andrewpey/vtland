const Snoowrap = require('snoowrap');

const r = new Snoowrap({
  userAgent: 'VoxelTycoonBot/1.0 (by /u/voxeltycoon)',
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD,
});

module.exports = {
  count: function() {
    return r.getSubreddit('voxeltycoon').fetch().then(subreddit => subreddit.subscribers);
  }
};
