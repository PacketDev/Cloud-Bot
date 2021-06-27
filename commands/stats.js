const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
module.exports.run = async(client, msg, args) => {
    const username = msg.toString().slice(msg.toString().indexOf(args[1]), msg.length);
    let getVersion = async() => {
        let response = await Axios.get("https://fortnite-api.com/v1/stats/br/v2?name=" + username)
        let version = response.data;
        return version
    }


    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('Fortnite Release Play testB server stats:')
        .addField('name', `${versionValue.data.account.name}`)
        .addField('level', `${versionValue.data.battlePass.level}`)
        .addField('solo wins', `${versionValue.data.stats.all.solo.wins}`)
        .addField('duo wins', `${versionValue.data.stats.all.duo.wins}`)
        .addField('squad wins', `${versionValue.data.stats.all.squad.wins}`)
        .addField('overall deaths', `${versionValue.data.stats.all.overall.deaths}`)
        .addField('overall wins', `${versionValue.data.stats.all.overall.wins}`)
        .addField('players Outlived', `${versionValue.data.stats.all.overall.playersOutlived}`)
        .addField('minutes Played', `${versionValue.data.stats.all.overall.minutesPlayed}`);

    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "stats",
    description: "this command gets the stats of a fortnite user",
    usage: "l.stats ",
    aliases: ['stats']
}