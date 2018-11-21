const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Server Announcement",
    description: "\n",
	fields: [{
        name: "@here",
        value: args.join(" ")
	},
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "Embed key: announce"
    }
  }
module.exports.help = {
	name: "sende",
	usage: "sende <embed_key>",
	description: "nil",
	longdes: "Sends an embed. Use a key to get the type you want to send.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
