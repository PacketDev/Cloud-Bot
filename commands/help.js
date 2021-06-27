const Discord = require('discord.js');
const ms = require('pretty-ms');
const { version } = require('../package.json');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
    name: "help",
    run: async(client, msg, args) => {
        msg.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Simple reaction role bot`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`HA COMING SOON NERD`)
            .setTimestamp()
            .setFooter('https://discord.gg/fMRYPGpxpj')
        );
    }
}