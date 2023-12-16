const rp = require('request-promise');

module.exports = {
    count: function() {
        return rp({ uri: `https://api.vk.com/method/groups.getById?group_id=voxeltycoon&fields=members_count&v=5.131&access_token=${process.env.VK_ACCESS_TOKEN}`, json: true })
        .then(json => json.response[0].members_count);
    }
}
