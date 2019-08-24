const Config = require('../config.json')
const data = require('../tickets.json')
module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
if (!args[0]) {
    message.channel.send(new Discord.RichEmbed().setColor(Config.ticketcolor).setDescription('Your ticket has been created!\nStaff will contact you in the ticket shortly!').setTimestamp().setAuthor('Tickets'))
    message.guild.createChannel(`ticket-${data.id}`).then(async c => {
    if (message.guild.channels.find(c => c.name.toLowerCase() === 'TH | Tickets')) {
        if (message.guild.channels.find(c => c.name.toLowerCase() === 'TH | Tickets').type === 'category') {
            c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === 'tickets').id)
        } else {
            c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === 'tickets').id)
        }
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === '@everyone'), {
            READ_MESSAGES: false
        })
        c.overwritePermissions(message.member, {
            READ_MESSAGES: true
        })
        c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'Support Staff'), {
            READ_MESSAGES: true
        })
	 
        message.delete();

    }
    await c.send(new Discord.RichEmbed().setDescription(Config.reason.replace('<newline>', '\n')).setColor(Config.ticketcolor))
})
data.id++;
fs.writeFile('./tickets.json', '{\n"id":' + data.id + "\n}", (err) => {
    if (!err) return;
    console.error(err)
  });
 	}}
module.exports.help = {
	name: "new",
	usage: "new <reason>",
	description: "nil",
	longdes: "Make a ticket.",
	mentionedperm: "N/A",
	category: "N/A"
};
  
