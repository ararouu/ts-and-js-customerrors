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

> 1. Harassment, homophobia and racism, are not allowed here, including the use of racial or homophobic slurs. This server has a zero-tolerance policy for such messages, and you may be banned immediately without warning.

> 2. Do not post anything that is NSFW or overly suggestive. If you are unsure if it is considered NSFW or suggestive, you should refrain from posting it and ask a staff member in the server. And also refrain from mentioning NSFW topics.

> 3. This server is not a marketplace: do not ask for money or in-game currency, try to buy / sell / giveaway anything, or ask people to join your Discord server or community. *this may result in a BAN.*

> 4. Avoid spamming – this includes repeated use of bot commands, misuse of spoiler tags or tagging people who are not currently active in the chat over and over again.

> 5. Please be mindful of channels and their uses! Failure to do so may result in loss of permissions. Relevant information about the purpose of each channel can be found in the channel topic and pinned messages at the top

> 6 You can't speak any other languages besides English, since most of our staff only know English.

> 7. Your nick/user must comply with the rest of the rules and must be taggable without using an excess of special characters, which means no fonts and only be English, same with texting in text channels.

> 8. Unapproved user bots and alts are not allowed here. Accounts involved will be banned without warning.

> 9. Remain civil and considerate towards other users. If there is a conflict, work to defuse it instead of making it worse.

> 10. Sending/Linking any harmful material such as viruses, IP grabbers or malware results in an immediate and permanent ban.

> 11. Minimodding/interferring with a staff member or pretending to be a staff member of the server will not be tolerated. This could be giving out false punishments to users when your aren't a staff member of the server, telling staff what to do/interfering 
 
> 12. Do not DM anyone in the server with a invite of your server. This can result in a permanant warn and if done the 2nd time, can result in a ban if caught doing so.

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
    
