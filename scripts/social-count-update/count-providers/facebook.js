const rp = require('request-promise');
const FB = require('fb');

module.exports = {
    count: function() {
        return FB.api('/voxeltycoon/', { fields: 'followers_count', access_token: process.env.FACEBOOK_APP_TOKEN }).then(x => x.followers_count);
    }
}
