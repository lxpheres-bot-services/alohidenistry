const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.get("509142932968701952")) return message.reply("Invalid permissons! You must have the `Bot Permission` role."){
	    let olduser = bot.user.username;
	    let newuser = args.join(" ");
	    bot.user.setUsername(args.join(" ")).then(() => {message.reply(`New username set to **${args.join(" ")}**!`); bot.guilds.get('503074702902689803').channels.get('506303108998234133').send(`My username has been changed from **${olduser}** to **${newuser}** by **${message.author.tag}**.`)})
	    	.catch((error) => {message.reply(`Can not set username to **${newuser}** because of \`${error}\``); bot.guilds.get('503074702902689803').channels.get('506303108998234133').send(`Set username command ran by **${message.author.tag}** failed with error: \`${error}\`.`)})
	    
    }
}

module.exports.help = {
	name: "setname",
	usage: "setname <username>",
	description: "nil",
	longdes: "Changes the bot username to what is sent.",
	mentionedperm: "Bot Permission",
  category: "Utility"
}
