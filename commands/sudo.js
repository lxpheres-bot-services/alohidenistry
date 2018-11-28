module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("503232354408595456")) return message.reply("Invalid permissons! You must have the `Bot Admin` role.").catch(() => bot.safeSend(message, module.exports.help.name));
	let wUser = message.guild.member(message.mentions.users.first());
	if (!wUser) return message.reply("That member can't be found!");
	args.shift();
	let reason = args.join(" ");
	if (!reason) message.reply("Command required to run!");

	const command = reason;
	message.reply = function(cont) { message.channel.send(wUser + ", " + cont); };
	message.author = wUser.user;
	message.member = wUser;
	message.content = command;
	message.mentions.users.delete(wUser.id);
	message.mentions.users.delete(wUser.id);
	message.content = ";" + command;
	args = command.split(" ");
	const cf = require(`./${args[0]}`);
	if (!cf) message.reply("That is not a valid command!");
	args.shift();
	cf.run(bot, message, args);
};
module.exports.help = {
	name: "sudo",
	usage: "sudo <user> <command> [args]",
	description: "Force commands on a user",
	longdes: "Forces a user to run a specific command.",
	mentionedperm: "Developer",
	category: "Utility"
};
