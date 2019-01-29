const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Server Announcement")
		.setColor("#ffeb5c")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL);
	bot.channels.get("535492440874811392").send({embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "announce",
	usage: "announce <txt>",
	description: "Announcement command, no ping.",
	longdes: "An announcement command, with no ping.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
