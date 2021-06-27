exports.run = async(client, msg, args) => {
    if (!msg.member.hasPermission('KICK_MEMBER')) return msg.reply('You do not have permission to use this command!')

    var user = msg.mentions.users.first() || msg.guild.member.cache.get(args[0]);
    if (!user) return msg.reply('You did not mention a member for me to kick!');
    var member;
    var find = args[0]
    try {
        member = await msg.guild.members.fetch(user)
    } catch (err) {
        member = null
    }
    if (member) {
        if (member.hasPermission('MANAGE_MESSAGEs')) return msg.reply('You cannot kick a fellow mod!');
    }

    var reason = args.splice(1).join(' ');
    if (!reason) return msg.reply('Please make sure to specify a reason for me to kick this user!')
    var channel = messgae.guild.channels.cache.find(c => c.name === 'general');
    var general = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${user} has been kicked by ${msg.author} for "**${reason}**"`)
    channel.send(general);

    var userGeneral = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`You have been kicked from Project Cloud! Feels bad man. Here is the reason so you do not repeat the same mistake: **${reason}**`)
    try {
        await user.send(userGeneral)
    } catch (err) {
        console.warn(err);
    }
    member.kick(reason)
    var confir = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${user} has been kicked by ${msg.author}`)
    msg.channel.send(confir);
    msg.delete();
}