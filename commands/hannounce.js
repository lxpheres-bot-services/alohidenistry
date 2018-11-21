const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Server Announcement")
		.setColor("#ffeb5c")
		.setDescription("\n")
		.addField("\n\n\n", args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL);
	message.channel.send("@here", {embed: embed});
}
module.exports.help = {
	name: "hannounce",
	usage: "hannounce <txt>",
	description: "Announcement command using here.",
	longdes: "An announcement command using here.",
	mentionedperm: "MANAGE_ROLES",
        category: "Utility"
}
