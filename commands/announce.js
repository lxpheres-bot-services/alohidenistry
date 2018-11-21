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
	name: "announce",
	usage: "announce <txt>",
	description: "Announcement command.",
	longdes: "An announcement command.",
	mentionedperm: "MANAGE_ROLES",
        category: "Utility"
}
