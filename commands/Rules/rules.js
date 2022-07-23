const { MessageEmbed, version } = require('discord.js');
module.exports = {
    name: 'rules',
    description: 'The rules.',
    
    devsOnly: true,
    
    execute: async (client, msg, args) => {
        
        
            const owner = ["840213882147831879",
                         "963447375177875456"]
        if(!owner.includes(msg.author.id)) return msg.delete()
        
const rules = `

> **Updated April 26 2022 9:40 PM CDT.**`








    msg.delete();
const embed = new MessageEmbed()
embed.setColor(client.embedColor)
embed.setDescription(`${rules}`)
        embed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        msg.channel.send({ embeds: [embed] });
        msg.channel.send(`**Afilates:** https://discord.gg/x8WGkw7vVH`)
}
    
    
}
    
