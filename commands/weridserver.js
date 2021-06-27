const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../lib/auth');
const auth = new Auth();
module.exports.run = async(client, msg, args) => {
    let getVersion = async() => {
        let response = await Axios.get("https://api.nitestats.com/v1/epic/staging/fortnite")
        let version = response.data;
        return version
    }
    let versionValue = await getVersion()
    const embed = new Discord.MessageEmbed()
        .setTitle('Fortnite Blue Ext QADev Testing server stats:')
        .addField('App name', `${versionValue.BlueExtQADevTesting.app}`)
        .addField('Name', `${versionValue.BlueExtQADevTesting.nameID}`)
        .addField('Branch', `${versionValue.BlueExtQADevTesting.branch}`)
        .addField('Build', `${versionValue.BlueExtQADevTesting.build}`)
        .addField('Cln', `${versionValue.BlueExtQADevTesting.cln}`)
        .addField('ModuleName', `${versionValue.BlueExtQADevTesting.moduleName}`)
        .addField('Version', `${versionValue.BlueExtQADevTesting.version}`)
        .addField('Override Properties Version', `${versionValue.BlueExtQADevTesting.overridePropertiesVersion}`)
        .addField('Build Date', `${versionValue.BlueExtQADevTesting.buildDate}`);

    msg.channel.send(embed)
        .catch(err => console.error(err))
}

module.exports.config = {
    name: "blueextqadevtesting",
    description: "",
    usage: "l.blueextqadevtesting",
    aliases: ['blueextqadevtesting']
}