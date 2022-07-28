const { MessageEmbed } = require("discord.js");
const { post } = require("node-superfetch");

module.exports = {
    name: "eval",
    aliases: ["e"],
    category: "Owner",
    description: "Eval Code",
    usage: "<string>",
    devsOnly: true,
   
    /**
     *
     * @param {Client} client
     * @param {Channel} message.channel
     * @param {String[]} args
     */
     execute: async (client, message, args) => {
    if(!args[0]) return message.reply("Specify a code!");
     const channel = message.channel     
         if(!client.config.devs.includes(message.author.id)) return message.delete()
  const output = await eval(args[0]);
   const msg = await channel.send({ content: "Evaluating code... This may take a while..." });
   msg.edit({ content: `Here's your evaluation.\n\`\`\`js\n${output}\`\`\`` });
   console.log(`${message.author.tag} evaluated ${args[0]}!`);
   }
}
