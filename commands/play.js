module.exports.run = async(client, msg, args) => {
    if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');

    const music = args.join(" ");

    client.distube.play(msg, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}