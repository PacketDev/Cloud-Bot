module.exports.run = async(client, msg, args) => {
    if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(msg);

    if (queue) {
        client.distube.skip(msg)

        msg.channel.send('skiped!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}