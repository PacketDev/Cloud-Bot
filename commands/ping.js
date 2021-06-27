const discord = module.require('discord.js')

module.exports.run = async(client, msg, args) => {
    msg.channel.send(`ok heres my ping \`${Date.now() - msg.createdTimestamp} ms\``);
}

module.exports.config = {
    name: "ping",
    description: "Pings the bot",
    usage: "?ping",
    aliases: []
}