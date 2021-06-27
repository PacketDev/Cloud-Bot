const Levels = require('discord-xp');

module.exports = {
    async execute(client, msg) {
        if (msg.author.bot) return;
        if (msg.channel.type == 'dm') return;

        const randomXP = Math.floor(Math.random() * 29) + 1; //1-30.
        const hasLeveledUP = await Levels.appendXP(msg.author.id, msg.guild.id, randomXP);
        if (hasLeveledUP) {
            const user = await Levels.fetch(msg.author.id, msg.guild.id);
            msg.channel.send(`${msg.member}, you have proceeded to level ${user.level}. Continue your work with in the server.`)
        }

        if (!msg.content.startsWith(client.preifx)) return;

        const args = msg.content.slice(client.preifx.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        try {
            command.execute(client, msg, args);
        } catch (err) {
            console.log(err)
        }
    }
}