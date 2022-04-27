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
     * @param {Message} message
     * @param {String[]} args
     */
     execute: async (client, message, args) => {
         
        //const evalmods = ["884070608181297172", "840213882147831879", "798675881819111424",
 //"963447375177875456"]                       
        if(!client.config.devs.includes(message.author.id)) return message.delete()
       
         
        const embed = new MessageEmbed()
        embed.setAuthor(
          "Evaluation",
          
        )
            .setColor(client.embedColor)
       embed.setDescription(`Evaluated in: *${client.ws.ping}ms*`)
        
        .addField("📥 Input", "```js\n" + args.join(" ") + "```");

        try {
            const code = args.join(" ");
            if (!code) return message.channel.send("What even are you evaluating?");
            let evaled;

            if (code.toLowerCase().includes(`secret`) || code.toLowerCase().includes(`token`) ||
          
           code.toLowerCase().includes(`config`) ||    code.toLowerCase().includes("client.ban") ||   code.toLowerCase().includes("process.env")) {
                evaled = "No.";
                
            } else {
                evaled = await eval(code);
            }

            if (typeof evaled !== "string") evaled = await require("util").inspect(evaled, { depth: 0 });
            
            let output = clean(evaled);
            if (output.length > 1024) {
                embed.setColor(client.embedColor)
              
                const { body } = await post("https://hastebin.com/documents").send(output);
                embed.addField("📤 Output", `\`\`\`Output is too long for Discord click\`\`\` **[here](https://hastebin.com/${body.key}.js)**.`)
              embed.addField(`Type`, "```js\n" + typeof evaled + "```")
                
            } else {
                embed    .setColor(client.embedColor)
                embed.addField("📤 Output", "```js\n" + output + "```")
                embed.addField(`Type`, "```js\n" + typeof evaled + "```")
            }

            message.channel.send({embeds: [embed]});

        } catch (error) {
            let err = clean(error);
            if (err.length > 1024) {
               
                const { body } = await post("https://hastebin.com/documents").send(err);
                embed    .setColor(client.embedColor)
                embed.addField("📤 Output", `\`\`\`Output is too long for Discord! Link: https://hastebin.com/${body.key}.js\`\`\``)
                embed.addField(`Type`, "```js\n" + typeof evaled + "```")
            } else {
                embed.addField("📤 Output", "```js\n" + err + "```")
                embed.addField(`Type`, "```js\n" + typeof evaled + "```")
                embed    .setColor(client.embedColor)
            }    

            message.channel.send({embeds: [embed]});
        }
    }
}

function clean(string) {
    if (typeof text === "string") {
        return string.replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
    } else {
        return string;
    }
}
