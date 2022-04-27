const Discord = require('discord.js');
module.exports = {
 name: 'ping',
 description: 'Pings the bot.',
 aliases: ['pong', 'pont'],
    requiredPermission: "SEND_MESSAGES",
 execute: async (client, message, args, prefix) => {
     function duration(ms) {
            const hours = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
            const minutes = Math.floor((ms / (1000 * 60)) % 60).toString();
            const seconds = Math.floor((ms / 1000) % 60).toString();
            return hours.padStart(2, '0') + ':' + minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
        }

        const uptime = duration(client.uptime);
 
    
  const msg = await
  message.channel.send(`Pinging..`)
        const ping = Math.floor(msg.createdAt - message.createdAt);
        
     msg.edit(`Pong! Client Websocket: \`${client.ws.ping}ms\` **|** API: \`${ping}ms\`.`)
        
   }
  }
