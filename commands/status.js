const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://fn-api.com/api/status")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('fortnite server status:')
        .addField('status', `${versionValue.serverStatus[0].status}`)
        .addField('message', `${versionValue.serverStatus[0].message}`)
        .addField('allowed actions', `${versionValue.serverStatus[0].allowedActions}`)
    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "status",
    description: "",
    usage: "l.status",
    aliases: ['status']
}