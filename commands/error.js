const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
        .setTitle('Some title here')
        .setDescription('Some Description here')
        .setAuthor('!Sky')

    msg.channel.send(embed)
}