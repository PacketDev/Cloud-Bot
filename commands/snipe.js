const discord = require("discord.js")

module.exports = {
    name: "snipe",
    aliases: ["ms", "snipe"],
    category: "fun",
    usage: "(prefix) snipe",
    description: "get deleted message",

    run: async(client, msg, args) => {


        const message = client.snipes.get(msg.channel.id)
        if (!msg) return msg.channel.send("there is no deleted messages")
        const embed = new discord.MessageEmbed()
            .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(msg.content)
            .setColor('RANDOM')
            .setTimestamp()
        if (msg.image) embed.setImage(msg.image)
        msg.channel.send(embed)
    }
}