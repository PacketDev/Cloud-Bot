exports.run = async(cleint, msg, args) => {
    var file = require(`./patch.json`);
    msg.channel.send(`The current Patch for Cloud's Utillites is Patch 0.0.1!`);
    var user = args[0]
    try {
        var file = require(`./${cmd}.js`);
        file.run(client, msg, args);

    } catch (err) {
        console.warn(err);
    }
}