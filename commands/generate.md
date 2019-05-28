module.exports.run = async (bot, message) => {
const Discord = require("discord.js");
	const allowedid = ["293060399106883584"];
	if (allowedid.includes(message.author.id)) {
function makeid(length) {
   var result           = 'PREMIUM-';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

message.channel.send(makeid(10));

module.exports.help = {
	name: "generate",
	usage: "generate",
	description: "generator cmd",
	longdes: "generator cmd",
	mentionedperm: "DEVELOPER",
	category: "Utility"
};
