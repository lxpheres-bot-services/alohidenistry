module.exports.run = async (bot, message) => {
	const allowedid = ["293060399106883584"];
	if (allowedid.includes(message.author.id)) {
		const sayMessage = args.join(" ");
		bot.guilds.get("559491866207453184").channels.get("559491866207453186").send(sayMessage);
		message.delete();
	} else {message.reply("Error! You do not have permission to use this command! You need to be the developer!");}
};

module.exports.help = {
	name: "esend",
	usage: "esend",
	description: "Sends the message as a bot.",
	longdes: "Sends the message given in the command as the bot.",
	mentionedperm: "DEV",
	category: "Developer"
};
