const Discord = require('discord.js')
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('All of the Fortnite shop categories in the api:')
    versionValue.shopSections.sectionList.sections.forEach(function(e) { embed.addField(`${e.sectionId}`, `Priority ${e.landingPriority}`) })
    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "shopcategories",
    description: "",
    usage: "l.shopcategories",
    aliases: ['categories']
}