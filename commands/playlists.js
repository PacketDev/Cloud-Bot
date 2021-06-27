const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(bot, message, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://fn-api.com/api/activeplaylists")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('Fortnite active playlists:')
    versionValue.activePlaylists.forEach(function(e) { embed.addField('active playlist found', `${e.id}`) })
    message.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "playlists",
    description: "",
    usage: "l.playlists",
    aliases: ['playlists']
}