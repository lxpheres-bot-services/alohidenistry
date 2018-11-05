module.exports.run = async (bot, message, args) => {
    const allowedid = ['293060399106883584'];
     if (allowedid.includes(message.author.id)) {
         	 message.react("✅");
                 bot.destroy();
                 bot.login(process.env.BOT_T0KEN);
	     	 let timestamp = new Date();
                 await console.log("I have successfully rebooted!");
	         await message.channel.send("All done, I have rebooted my systems!");
	      await bot.guilds.get('503074702902689803').channels.get('506303108998234133').send(`I have been rebooted by **${message.author.tag}** at **${timestamp}**.`)
	}
};    

module.exports.help = {
    name: "reboot",
    usage: "reboot",
    description: "nil",
    longdes: "Restarts the bot.",
    mentionedperm: "DEVELOPER",
  category: "Developer"
}
