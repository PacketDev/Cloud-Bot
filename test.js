const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const antiAd = require('./commands/antiAd')
const antiLink = require('./commands/antiLink');

client.on('ready', async() => {
    console.log('Starting Up Bot!')

    antiAd(client)

    const baseFile = 'command.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }



    readCommands('commands')
})

client.on('msg', async msg => {
    let link = ["discord.gg", "discord.com/invite", "discordapp.com/invite", "https://"]

    if (link.some(word => msg.content.toLowerCase().includes(word))) {
        await msg.delete()
        return msg.channel.send("You cannot send links in the server!")
            .then(m = m.delete({ timeout: 10000 }))
    }
})

client.login(config.token)