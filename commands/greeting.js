/**
 * a
 */

//a
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * asd
 * ra
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Crasdsada
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'bot-logs');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

}  

module.exports.help = {
    name: "greeting",
    usage: "N/A",
    description: "Greets new members!",
    longdes: "Greeting.",
    mentionedperm: "BOT",
  category: "BOT"
}

// lel
client.login(process.env.BOT_T0KEN);
