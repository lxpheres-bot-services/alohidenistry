const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, client, response, args) => {
  //if () {
	  let role = args.join(" ");
	  if (!role) return response.reply("Please specify a role to view!");
    const roles = response.guild.roles.array();
    const argString = args.join("").toLowerCase();
    const check = (role => role.name.includes(argString));
    const matches = roles.filter(check);
          role = matches[0];
	  if (matches.length === 1) {
		  const embed = new Discord.RichEmbed()
      .setTitle(role.name + "'s Information")
      .addField("Created", role.createdAt)
      .addField("Color", role.hexColor)
      .addField("Shown Seprately From Online Members", role.hoist)
      .addField("Members", role.members.size)
      .addField("Position", role.position)
      .addField("Permission Integer", role.permissions)
      .addField("Mention", "`" + role.toString() + "`")
      .setColor(role.hexColor)
      
      response.channel.send({embed})
      } else {
    if (matches.length === 0) response.reply("No roles were found with your query.");
    if (matches.length >= 2) {
      const lol = matches.join(",\n");
      const embed = new Discord.RichEmbed()
      .setTitle(`${matches.length} roles were found:`)
      .setDescription(lol)
      .setFooter("Please run the command again with a more specific term.")
      
      response.channel.send({embed})
	 }
}
	 // } else {response.reply("you are not allowed to run that command!");}
}

module.exports.help = {
  name: "roleinfo",
  usage: "roleinfo <role>",
  description: "nil",
  longdes: "View a role's info.",
  mentionedperm: "none",
  category: "Utility"
}
