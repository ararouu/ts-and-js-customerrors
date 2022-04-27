const { MessageEmbed } = require('discord.js')
const ms = require('ms');

module.exports = {
	name: 'uptime',
  aliases: ['up'],
    requiredPermission: "SEND_MESSAGES",
	
	 execute: async(client, message, args) => {
		    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400) || "0";
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600) || "0";
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60) || "0";
    let seconds = Math.floor(totalSeconds % 60);

  
    message.channel.send({ content: `${ms(client.uptime, { long: true })}`
});
  }
    }
