const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://fn-api.com/api/shop_categories")
        let version = response.data;
        return version
    }
    let ok = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('Fortnite shop categories:')
    ok.shopCategories.forEach(function(e) {
        embed.addField(`${e.sectionName}`, `quantity ${e.quantity}`)

    })
    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "shopcat",
    description: "",
    usage: "l.shopcat",
    aliases: ['categories']
}