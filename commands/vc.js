const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://ap.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-b988104f-573a-4060-aac7-f2d8c4563c6b")
        let version = response.data;
        return version
    }
    let ok = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('all valorant characters:')
    ok.characters.forEach(function(e) {
        embed.addField(`${e.name}`, `id ${e.id}`)

    })
    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "vcharacters   ",
    description: "",
    usage: "l.vcharacters",
    aliases: ['vcharacters']
}