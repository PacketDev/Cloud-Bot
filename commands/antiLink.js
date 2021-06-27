const time = require('timers');

module.exports = (client, msg, args) => {
    client.on('msg', async msg => {
        let link = ["discord.gg", "discord.com/invite", "discordapp.com/invite", "https://"]

        if (link.some(word => msg.content.toLowerCase().includes(word))) {
            await msg.delete()
            return msg.channel.send("You cannot send links in the server!")
                .then(m = m.delete({ timeout: 10000 }))
        }
    })
}