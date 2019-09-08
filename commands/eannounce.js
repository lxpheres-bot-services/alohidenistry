const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Alohi Dentistry Server Announcement")
		.setColor("#ffeb5c")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL);
	bot.channels.get("579722437437030422").send("@everyone", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "eannounce",
	usage: "eannounce <txt>",
	description: "Announcement command using everyone.",
	longdes: "An announcement command using everyone.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
