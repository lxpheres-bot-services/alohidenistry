const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const rbx = require("noblox.js");
module.exports.run = async () => {
	const bot = new Discord.Client({ disableEveryone: true, fetchAllMembers: true });

client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		console.log("Couldn't find any commands!")
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} has been loaded!`);
		client.commands.set(props.help.name, props);
	});
});

client.on("ready", async () => {
	client.user.setPresence({ game: { type: 3, name: "Creamy'z Cafe! | ;help" }, status: "online" });
	console.log(`${client.user.tag} has started!`);
	rbx.login({ username: 'CreamyzRankingBot', password: process.env.rblx});
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-logs');
  if (!channel) return;
  channel.send(`Welcome to **Creamy'z Cafe | Offical Server**, ${member.user.tag}! :smile:`);
});
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'member-logs');
  if (!channel) return;
  channel.send(`${member.user.tag} has left the server! :slight_frown:`);
});
client.on("messageDelete", async message => { if (message.author.bot) return;
	let cha = message.guild.channels.find("name", "mod-logs");
	
	if (!cha) return;
	
	require('./resources/embed.js').mlog(cha, "Message Deleted", "Sent by **" + message.author.tag + "** (**" + message.author.id + "**) in <#" + message.channel.id + "> \n\n **__Content__**: \n" + message.content, message)
})

client.on("messageDeleteBulk", async messages => {
	let cha = messages.array()[0].guild.channels.find("name", "mod-logs");
	
	if (!cha) return;
	
	require('./resources/embed.js').mbulklog(cha, "Messages Deleted", "**" + messages.length > 0 { + "** messages deleted in <#" + messages.array()[1].channel.id + ">" , messages.array()[1], messages)
})

client.on("messageUpdate", async (message, newmessage) => { if (newmessage.content === message.content) return; if (message.author.bot) return;
	let cha = message.guild.channels.find("name", "mod-logs");
	
	if (!cha) return;
	
	require('./resources/embed.js').mlog(cha, "Message Edited", "Sent by **" + message.author.tag + "** (**" + message.author.id + "**) in <#" + message.channel.id + "> \n\n **__Old Message:__**: \n" + message.content + "\n\n __**New Message**__ \n" + newmessage.content, message)
})

client.on("message", async message => {

	if (message.author.bot) return;

	let prefix = ";";
	
	if(message.content.indexOf(prefix) !== 0) return;
	
	
	let messageArray = message.content.split(" ");
	let cmd = messageArray.shift();
	let args = messageArray

	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args);
});

client.login(process.env.BOT_T0KEN);
};
this.run();
