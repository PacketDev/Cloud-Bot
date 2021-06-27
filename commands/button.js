const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const { green } = require('colors')

exports.run = async(client, msg, args) => {

    const embed = new Discord.MessageEmbed()
        .setTitle("Are you sus?")
        .setColor("BLUE")

    const btn1 = new MessageButton()
        .setStyle('green')
        .setLabel("Yes")
        .setID("1")

    const btn2 = new MessageButton()
        .setStyle('red')
        .setLabel("No")
        .setID("2")

    const yes = new MessageActionRow()
        .addComponent(btn1)
        .addComponent(btn2)

    msg.channel.send('hmmmmmm', {
        embed: embed,
        component: yes
    })
}


module.help = {
    name: 'button',
    aliases: []
}