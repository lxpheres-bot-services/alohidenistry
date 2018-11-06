const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("it doesn't look like you can use that!");
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!wUser) return message.reply("That member can't be found!");
	if (wUser.hasPermission("MANAGE_MESSAGES") || wUser.hasPermission("ADMINISTRATOR")) return message.reply("Cannot warn that user! Check that I have sufficent permissions, or you have permission to warn that user!");
	let reaso = args.shift();
	let reason = args.join(" ");

	if (!reason) {reason = "*No reason specified.*"}
        message.channel.send(`**${message.author.username}** has warned <@${wUser.id}> because of **${reason}**.`);
	wUser.send(`You have been warned in **${message.guild.name}** for **${reason}**.`);
	await bot.guilds.get('503074702902689803').channels.get('506303108998234133').send(`**${member.user.tag}** has been warned by ${message.author.tag} because of: **${reason}**.`)
	
}

module.exports.help = {
	name: "warn",
	usage: "warn <user> [reason]",
	description: "Warns a user",
	longdes: "Warns the user given along with a reason.",
	mentionedperm: "MANAGE_MESSAGES",
  category: "Moderation"
}
