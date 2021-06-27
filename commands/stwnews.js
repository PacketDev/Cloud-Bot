const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://fortnite-api.com/v2/news/stw")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('stw news:')
    versionValue.data.messages.forEach(function(e) { embed.addField('stw news image found', `${e.image}`, `${e.title}`, `${e.body}`) })
    versionValue.data.messages.forEach(function(e) { embed.addField('stw news title found', `${e.title}`, `${e.body}`) })
    versionValue.data.messages.forEach(function(e) { embed.addField('stw news discription found', `${e.body}`) })
    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "stwnews",
    description: "",
    usage: "l.stwnews",
    aliases: ['stwnews']
}