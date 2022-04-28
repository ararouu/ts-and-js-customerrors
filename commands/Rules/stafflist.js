const { MessageEmbed, version } = require("discord.js");
module.exports = {
  name: "stafflist",
  description: "List",

  devsOnly: true,

  execute: async (client, msg, args) => {
    const owner = ["840213882147831879", "963447375177875456"];
    if (!owner.includes(msg.author.id)) return msg.delete();

    const rules = `

 

[2] Owners
@Hyperfire#0298 
@catowl#3629 

[2] Administrators
@Philip.#9966 
@Bea#1337 

[2] Head Moderators
@Box_#0561 
@TehNeon#5974 

[5] Moderators
@Disample#0627 
@Zcr233#2369 
@J3RRY3251#3251 
@Wolff2b#5119 
@Dman#1356 

[0] Trainee Moderators

`;

    msg.delete();
    const embed = new MessageEmbed();
    embed.setColor(client.embedColor);
    embed.setTitle("Staff Guide");
    embed.setDescription(`${rules}`);
    embed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }));
    msg.channel.send({ embeds: [embed] });
  },
};
