const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(bot, message, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://fortnite-api.com/v1/map")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('fortnite radio Stations:')
    versionValue.data.pois.forEach(function(e) { embed.addField(`${e.name}`, `${e.id}`) })
    message.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "pois",
    description: "",
    usage: "l.pois",
    aliases: ['pois']
}