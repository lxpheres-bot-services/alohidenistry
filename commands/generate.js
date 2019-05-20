const Discord = require("discord.js");
function makeid(length) {
   var result           = 'PREMIUM-';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makeid(10));

module.exports.help = {
	name: "generate",
	usage: "generate",
	description: "generator cmd",
	longdes: "generator cmd",
	mentionedperm: "DEVELOPER",
	category: "Utility"
};
