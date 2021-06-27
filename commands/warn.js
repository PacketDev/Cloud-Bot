const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if (!user) return msg.reply('you did mention a user for me to warn!');

    var member;
    try {
        member = await msg.guild.members.fetch(user);
    } catch (err) {
        member = null
    }
    if (!member) return msg.reply('the user that you mentioned is not in Project Cloud!');

    var reason = args.splice(1).join(' ');
    if (!reason) return msg.reply('you forgot to include a reason!')
    if (msg.author.id === user.id) return msg.reply('you cannot warn yourself!')

    var warnEmbed = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${user} has been succesfully warned by ${msg.author}!`)
        .setFooter('This messgae will auto delete after 5 seconds!')
    var sendEmbed = await msg.channel.send(warnEmbed);
    msg.delete();

    setTimeout(() => {
        sendEmbed.delete()
    }, 5000);

    var embed = new Discord.MessageEmbed()
        .setColor('0xff3030')
        .setTitle('You were warned by **Cloud Utillites**!')
        .setDescription('Server: **Project Cloud**')
        .addField('Reason:', reason)
        .setThumbnail('https://media.discordapp.net/attachments/852018991181856852/852413868118507530/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f383335333032303436.png')

    try {
        user.send(embed);
    } catch (err) {
        console.warn(err)
    }


}