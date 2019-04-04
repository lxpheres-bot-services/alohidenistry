module.exports.run = async (bot, message) => {
	const allowedid = ["293060399106883584"];
	if (allowedid.includes(message.author.id)) {
		const eMessage = args.join(" ");
		bot.guilds.get("559491866207453184").channels.get("559491866207453186").send(eMessage);
		message.delete();
};

module.exports.help = {
	name: "wsend",
	usage: "esend",
	description: "Sends the message as a bot.",
	longdes: "Sends the message given in the command as the bot.",
	mentionedperm: "DEV",
	category: "Developer"
};
