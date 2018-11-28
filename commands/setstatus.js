module.exports.run = async (bot, message, args) => {
	const allowedid = ["293060399106883584"];
	if (allowedid.includes(message.author.id)) {
		let type = args[1].toUpperCase();
		if (type === "PLAYING") type = 0;
		else if (type === "LISTENING") type = 2;
		else if (type === "WATCHING") type = 3;
		if (!args[1]) return message.reply("Usage: `;setstatus (status: online, idle, invisible, dnd) (type: playing, listening, watching) (description)`");
		bot.user.setPresence({ game: { type: type, name: args.splice(2, args.length).join(" ") }, status: args[0].toLowerCase() }).then(() => {
			message.reply(":white_check_mark: All set!").catch(() => bot.safeSend(message, module.exports.help.name));
		}).catch(() => {
			message.reply(":x: Couldn't change the status!").catch(() => bot.safeSend(message, module.exports.help.name));
		});
	}
};
module.exports.help = {
	name: "setstatus",
	usage: "setstatus (status: online, idle, invisible, dnd) (type: playing, listening, watching) (description)",
	description: "nil",
	longdes: "Set the bot's status.",
	mentionedperm: "Developer",
	category: "Developer"
};
