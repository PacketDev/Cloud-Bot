module.exports.run = async(client, msg, args) => {
    if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(msg);

    if (queue) {
        client.distube.stop(msg)

        msg.channel.send('Stoped!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "stop",
    aliases: []
}