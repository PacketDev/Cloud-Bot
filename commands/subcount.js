const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://counts.live/api/youtube-subscriber-count/UCtKNrztGa7WU5vGCknAWnkw/live")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('Glitchluxs youtube stats:')
        .addField('count', `${versionValue.data.subscribers}`)
        .addField('videos uploaded', `${versionValue.data.videos}`)
        .addField('view count', `${versionValue.data.views}`)
        .addField('channel id', `${versionValue.data.lv_identifier}`)
        .addField('channel link', `https://www.youtube.com/c/glitchlux`)

    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "subcount",
    description: "",
    usage: "l.subcount",
    aliases: ['subcount']
}