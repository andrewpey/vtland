const _ = require('lodash');
const fs = require('fs').promises;
const path = require('path');
const telegram = require('./telegram.js');
const vk = require('./count-providers/vk.js');
const twitter = require('./count-providers/twitter.js');
const facebook = require('./count-providers/facebook.js');
const youtube = require('./count-providers/youtube.js');
const reddit = require('./count-providers/reddit.js');
const discord = require('./count-providers/discord.js');

async function main() {
    let providers = {
        vk: vk.count,
        tw: twitter.count,
        fb: facebook.count,
        yt: youtube.count,
        rd: reddit.count,
        dd: discord.count,
    };

    try {
        const counts = await Promise.all(
            Object.entries(providers).map(([name, func]) =>
                countWithCatch(name, func)
            )
        );
        const filePath = path.join(__dirname, '../../_data/socials.json');
        const data = await fs.readFile(filePath);
        
        let prevCounts = JSON.parse(data);
        let newCounts = Object.assign({}, prevCounts);
        let changedCounts = {};
        let errorMessages = [];

        counts.forEach((count, i) => {
            const key = Object.keys(providers)[i];
            if (count.error) {
                errorMessages.push(`\`${key}: ${count.message}\``);
            } else {
                newCounts[key] = count;
                if (!prevCounts.hasOwnProperty(key) || count !== prevCounts[key]) {
                    changedCounts[key] = count;
                }
            }
        });

        if (_.isEmpty(changedCounts) && errorMessages.length === 0) {
            console.log('nothing changed');
            return 'nothing changed';
        }

        await fs.writeFile(filePath, JSON.stringify(newCounts));

        const countMessages = buildTelegramCountMessages(changedCounts, prevCounts);
        return await telegram.send([...countMessages, ...errorMessages].join('\n'));
    } catch (error) {
        console.log(error);
        return telegram.send(error.toString());
    }
}

async function countWithCatch(providerName, providerFunction) {
    try {
        return await providerFunction();
    } catch (error) {
        console.error(`Error with ${providerName}:`, error.message);
        return { error: providerName, message: error.message };
    }
}

function buildTelegramCountMessages(newCounts, prevCounts) {
    let messages = [];
    for (let key in newCounts) {
        let newVal = newCounts[key];
        let oldVal = prevCounts[key] || 0;

        if (newVal == oldVal)
            continue;

        let emoji = newVal > oldVal ? '☀️' : '❄️';
        // let emoji = newVal > old ? '🦠' : '💀';
        let msg = emoji.repeat(Math.abs(newVal - oldVal)) + '`' + key + '`';
        messages.push(msg);
    }
    return messages;
}

main()
