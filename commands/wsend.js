module.exports.run = async (bot, message, args) => {
	const allowedid = ["293060399106883584"];
	const sayMessage = args.join(" ");
	if (allowedid.includes(message.author.id))
		bot.guilds.get("559491866207453184").channels.get("559491866207453186").message.channel.send(sayMessage);
		message.delete();
};

module.exports.help = {
	name: "wsend",
	usage: "wsend",
	description: "Sends the message as a bot.",
	longdes: "Sends the message given in the command as the bot.",
	mentionedperm: "DEV",
	category: "Developer"
};
