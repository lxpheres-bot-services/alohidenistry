const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("MANAGE_GUILD")) {
      const sayMessage = args.join(" ");
      message.channel.send(sayMessage);
      message.delete();
    } else {message.reply("Error! You do not have permission to use this command! You need the `MANAGE_GUILD` permission!")}
}

module.exports.help = {
	name: "say",
	usage: "say <message>",
	description: "Sends the message as a bot.",
	longdes: "Sends the message given in the command as the bot.",
	mentionedperm: "MANAGE_GUILD",
  category: "Utility"
}
