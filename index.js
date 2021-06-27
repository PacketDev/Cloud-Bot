const config = require('./config.json');
const Discord = require('discord.js');
const ms = require('ms');
const client = new Discord.Client();
const fs = require('fs');
const Levels = require('discord-xp');
const chalk = require('chalk');
var setTitle = require('console-title');
const readline = require("readline");
const info = require('./info.json');
const command = require('commands');
const callback = require('callback');
const mongoose = require('./database/mongoose');
var center = require("center-align");
var colors = require("colors");
DisTube = require('distube');
client.disbut = require('discord-buttons')(client);
const { MessgaeButton, MessgaeActionRow } = require("discord-buttons");
const antiAd = require('./commands/antiAd')
antiAd(client)
const antiLink = require('./commands/antiLink');


Levels.setURL(`mongodb+srv://CloudBot:z7KYRvP8c2y82vNf@cluster0.gzxrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
client.commands = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

client.on('clickButton', async(button) => {
    if (!button.id == '1') {

        button.defer
        const embed = new Discord.MessageEmbed()
            .setTitle("Neat")
            .setDescription("Alright you know what to do!")
            .setColor("GREEN")

        const DISCORD = new MessageButton()
            .setStyle("url")
            .setLabel("Join")
            .setURL("https://discord.gg/MfXNpTg4EV")

        button.msg.edit({
            embed: embed,
            component: DISCORD
        })
    }
})


client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n`
    ))

const { type } = require('os');

client.on("ready", async() => {
    //cmd set title
    setTitle("Cloud Bot V3");
    //cmd display info
    console.log(center(`

░█████╗░██╗░░░░░░█████╗░██╗░░░██╗██████╗░  ██████╗░░█████╗░████████╗  ██╗░░░██╗██████╗░
██╔══██╗██║░░░░░██╔══██╗██║░░░██║██╔══██╗  ██╔══██╗██╔══██╗╚══██╔══╝  ██║░░░██║╚════██╗
██║░░╚═╝██║░░░░░██║░░██║██║░░░██║██║░░██║  ██████╦╝██║░░██║░░░██║░░░  ╚██╗░██╔╝░█████╔╝
██║░░██╗██║░░░░░██║░░██║██║░░░██║██║░░██║  ██╔══██╗██║░░██║░░░██║░░░  ░╚████╔╝░░╚═══██╗
╚█████╔╝███████╗╚█████╔╝╚██████╔╝██████╔╝  ██████╦╝╚█████╔╝░░░██║░░░  ░░╚██╔╝░░██████╔╝
░╚════╝░╚══════╝░╚════╝░░╚═════╝░╚═════╝░  ╚═════╝░░╚════╝░░░░╚═╝░░░  ░░░╚═╝░░░╚═════╝░

    ╦════════════════════════╦
    ║                        ║
    ║      Cloud Bot V3      ║
    ║   Made by !Sky#9999    ║
    ║                        ║
    ╩════════════════════════╩
    `.red, 112));
    client.user.setPresence({
        activity: {
            name: 'Cloud V2',
            type: "WATCHING"
        },
        status: 'dnd'
    });
});

client.on('message', async(msg) => {
    if (msg.mentions.users.size > 2 && !msg.member.hasPermission('BYPASS PERMISSION GOES HERE') && !msg.channel.id === 'BYPASS CHANNEL ID GOES HERE') {


        msg.delete()
        return msg.reply('you cannot mass mention users in this server!')

    }
    var array = ['shit', 'nigga', 'bitch', 'fuck', 'if you are seeing this, pls sub to my channel :)'];

    if (array.some(w => ` ${msg.content.toLowerCase()} `.includes(` ${w} `))) {

        var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))


        if (!warnsJSON[msg.author.id]) {
            warnsJSON[msg.author.id] = {
                warns: 0
            }

            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
        }

        warnsJSON[msg.author.id].warns += 1
        Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))


        setTimeout(function() {

            warnsJSON[msg.author.id].warns -= 1
            Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON))
        }, ms('24h'))

        var warnEm = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle(`You have been warned in ${msg.guild.name}`)
            .setDescription('You have recieved a warning from the moderation system')
            .addField('Reason', '[AutoMod] Using filtered words')
            .addField('Expires', '24h')

        try {
            msg.author.send(warnEm)

        } catch (err) {

        }


        if (Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
            var mutedEm = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`**${msg.member.user.username}** has been muted for continuous infractions`)
            msg.channel.send(mutedEm)

            const muteRole = msg.guild.roles.cache.find(r => r.name === 'mute')
            const user = msg.member
            user.roles.add(muteRole.id)

            var yougotmuted = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`You have been muted in ${msg.guild.name}`)
                .setDescription('You have been muted after 3 infractions')
                .addField('Reason', 'Multiple AutoMod Infractions')
                .addField('Expires', '2h')

            try {

                msg.author.send(yougotmuted)

            } catch (err) {

            }

            setTimeout(function() {
                user.roles.remove(muteRole.id)
            }, ms('2h'));

        }
        return;
    }




    var prefix = config.prefix;
    if (!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ')
    var cmd = args.shift().slice(prefix.length).toLowerCase();
    try {
        var filerun = args[0]
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);

        var prefix = config.prefix;
        if (!msg.content.toLowerCase().startsWith(prefix)) return;
        console.log(`Running the command ${command}`)
        callback(msg)

    } catch (err) {
        console.warn(err);
    }
})


client.on('guildMemberAdd', async(member) => {
    var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'));
    warnsJSON[member.id] = {
        warns: 0
    }
    Fs.writeFileSync('./warnInfo.json', JSON.stringify(warnsJSON));

    const welcomeChannel = member.guild.channels.cache.find(c => c.name === 'welcone-channel')
    const serverIcon = member.guild.iconURL({ dynamic: true })
    const memberCount = member.guild.memberCount
    var embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${member.user.username} Welcome to ${msg.guild.name}`)
        .setDescription(`Read the rules <#852018991181856852>\n New member count of the server: \`${memberCount}\``)
        .setThumbnail('https://media.discordapp.net/attachments/852018991181856852/852413868118507530/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f383335333032303436.png')
    welcomeChannel.send(embed)

    const addRole = member.guild.cache.find(r => r.name === 'member')
    member.roles.add(addRole)
})

client.on('msg', async msg => {
    let link = ["discord.gg", "discord.com/invite", "discordapp.com/invite", "https://"]

    if (link.some(word => msg.content.toLowerCase().includes(word))) {
        await msg.delete()
        return msg.channel.send("You cannot send links in the server!")
            .then(m = m.delete({ timeout: 10000 }))
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.content.includes('<@808723153894899732>')) { //YOUR USER ID HERE
        newMessage.delete()
        return newMessage.reply('you cannot ping this user!')
    }
})

mongoose.init();
client.login(config.token);