var rbx = require("./noblox.js");
exports.run = async (bot, message, args) => {
		if (!message.member.roles.get("509497944043552768")) return message.reply("Invalid permissons! You must have the `Bot Admin` role.")
		rbx.getRoles(3008227).then((roles) => {
			rbx.getIdFromUsername(args[0]).then((result) => {
				rbx.getRankInGroup(3008227, result).then((currentRank) => {
					if (currentRank === 0) return message.reply("This person isn't in the group!");
					var rank = args.splice(1, args.length).join(" ");
					if (!roles.find((role) => role.Name === rank)) return message.reply("Not a valid rank name!");
					if (roles.find((role) => role.Name === rank).Rank > roles.find((role) => role.Name === "Vice President").Rank || currentRank > roles.find((role) => role.Name === "Vice President").Rank) return message.reply("You cannot change the rank of a Vice President+ or rank anyone above Vice President.");
					rbx.setRank(3008227, result, roles.find((role) => role.Name === rank).Rank).then(() => {
						message.reply(`Ranked \`${args[0]}\` to \`${rank}\``);
					}).catch(() => {
						message.reply("Couldn't rank this user in the group.");
					});
				}).catch(() => {
					message.reply("Couldn't fetch this user's rank.");
				});
			}).catch(() => {
				message.reply("Couldn't find this user.");
			});
		}).catch(() => {
			message.reply("Couldn't fetch group ranks.");
		});
	},
module.exports.help = {
name: "rank",
usage: ";rank plr rank",
description: "Ranks someone in the roblox group.",
longdes: "Ranks someone in the roblox group.",
mentionedperm: "Bot Admin Role",
category: "Utility"
}
