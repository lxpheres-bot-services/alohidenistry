const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You cannot run this command. You must be a SR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Alohi Dentistry | Server Announcement")
		.setColor("#ffeb5c")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/620275379520667648/620373417631154221/b159c0540d79a99026f2e154ff447e58.png");
		bot.channels.get("579722437437030422").send({embed: embed}).then(() => {
		bot.channels.get("620374834316312616").send("There has been an announcement made by ${message.author.tag}");
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
	mentionedperm: "Bot Perms Role",
	category: "Utility"
};
