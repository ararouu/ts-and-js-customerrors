const { MessageEmbed, version } = require('discord.js');
module.exports = {
    name: 'staffguide',
    description: 'Guide',
    
    devsOnly: true,
    
    execute: async (client, msg, args) => {
        
        
            const owner = ["840213882147831879",
                         "963447375177875456"]
        if(!owner.includes(msg.author.id)) return msg.delete()
        
const rules = `
**----Rules----**
1. No leaking staff channels
2. Don't be toxic when moderating, atleast have some respect for members
3. Don't give out false punishments

**----Situations----**
1: If a member is spamming, delete the messages and warn them.
2: If a member posts any sort of nsfw (ranging from gore to porn)  in a channel, delete the messages and ban.
3: If a member bypasses a mute with a alt, ban the main and alt
4: If a member bypasses the n word, ban them.

**----Command Usages----**
>ban <string> <reason>
>warn <string> <reason>
>mute <string> <reason>
>5w <string> OUT OF USE 
>6h <string> OUT OF USE 
>underage <string> OUT OF USE 
>lang <string> OUT OF USE 
>spam <string> OUT OF USE 
>toxicity <string> OUT OF USE 
>unban <string> <reason>

**---- ----**
If you ban, warn or mute a member, please provide the screenshot of the proof, the punishment reason and the punishment ID. Failure to do so could may result in your ranks being lowered down to trainne. (This applies to all staff.)

****---- ----****
Also to administrators: DON'T INVITE RANDOM BOTS!!! This could result in the server getting destroyed/nuked. If you don't have permission to invite one, don't. *Your permissions can be taken away for this if the server is destroyed.*

`








    msg.delete();
const embed = new MessageEmbed()
embed.setColor(client.embedColor)
        embed.setTitle('Staff Guide')
embed.setDescription(`${rules}`)
        embed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        msg.channel.send({ embeds: [embed] });
        
}
    
    
}
    
