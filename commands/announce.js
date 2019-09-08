const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You cannot run this command. You must be a SR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Alohi Dentistry | Server Announcement")
		.setColor("#ffeb5c")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/613900389137514515/614440651882364979/image0.png");
	bot.channels.get("579722437437030422").send({embed: embed}).then(() => {
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
