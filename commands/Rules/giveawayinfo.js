const { MessageEmbed, version } = require('discord.js');
module.exports = {
    name: 'giveawayinfo',
    description: 'The giveaway info.',
    
    devsOnly: true,
    
    execute: async (client, msg, args) => {
        
        
            const owner = ["840213882147831879",
                         "963447375177875456"]
        if(!owner.includes(msg.author.id)) return msg.delete()
        
const rules = `

Hello! This is the information/guide for hosting giveaways!

**----Rules----**


Format: 

\`[ <@966044889211101214> ]
 

 DM me to claim!\`


How to host a giveaway!

> We use a specific bot, (Giveaway Bot) for hosting giveaways.
To start one: do in the text channel #giveaways:  \`!gstart [duration] (winnersHere)w [prize here]\`
Example: \`!gstart 1h 1w 250k DMC (Dank Memer Coins)\``
 









    msg.delete();
const embed = new MessageEmbed()
embed.setColor(client.embedColor)
embed.setDescription(`${rules}`)
        embed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        msg.channel.send({ embeds: [embed] });
        
}
    
    
}
    
