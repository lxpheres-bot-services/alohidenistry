var rbx = require("noblox.js");
module.exports = {
	run: async (bot, message, args) => {
		if (!message.member.hasPermission("MANAGE_ROLES") || message.guild.id !== "503074702902689803" return message.reply("Invalid permissons! You must have the `MANAGE_ROLES` permission.").catch(() => bot.safeSend(message, module.exports.help.name));
		if (!args[0]) return message.reply("Usage: `;shout (message)`").catch(() => bot.safeSend(message, module.exports.help.name));
		rbx.shout(3008227, args.join(" ")).then(() => {
			message.reply("Successfully shouted to the group.").catch(() => bot.safeSend(message, module.exports.help.name));
		}).catch(() => {
			message.reply("Error! I could not shout the message to the group.").catch(() => bot.safeSend(message, module.exports.help.name));
		});
	},
	help: {
		name: "shout",
		category: "Group Administration"
	}
};
