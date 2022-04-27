const { MessageEmbed } = require("discord.js");

const { readdirSync, fs } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
    requiredPermission: "SEND_MESSAGES",

    execute: async (client, message, args) => {
        
      
         
    
    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);
            
            

          if (!file.name) return "No command name.";
                
       
           if(file.requiredPermission) if(!message.member.permissions.has(file.requiredPermission)) return `** **`;
            
            const evalmods = ["884070608181297172", "840213882147831879", "798675881819111424",
                         "963447375177875456"]
        
            
          if (file.devsOnly === true) { if(!evalmods.includes(message.author.id)) return `** **`; }
            const owner = ["840213882147831879",
                         "963447375177875456"]
        if (file.devsOnly === true) { if(!owner.includes(message.author.id)) return `** **`; }

          let name = file.name.replace(".js", "");
            

          return `**\`${name}\`** **|** `;
        });

        let data = new Object();

        data = {
          name: `**${dir}**`,
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });
       

      const embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
        .addFields(categories)
        .setFooter(
            `Do ${prefix} help [command] for command information!`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(client.embedColor)
      return message.channel.send({ embeds: [embed]})
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setDescription(`That is a invalid command name!`)
          .setColor("RED");
          return message.channel.send({ embeds: [embed]})
      }
        
     
            
    
            

        

if(command.requiredPermission) {
    
if(!message.member.permissions.has(command.requiredPermission)) {
    const mp = new MessageEmbed()
        mp.setColor("RED")
        mp.setDescription(`This shouldn't concern you.`)
       const membed = await  message.channel.send({
          embeds: [ mp ]})//.then(setTimeout(() => { message => message.delete()) }, ms('10s'))
          setTimeout( () => {membed.delete().catch(e => {null;})  }, 7000)
          setTimeout( () => {message.delete().catch(e => {null;})  }, 7000)
          return;
       }                  
    
    }

      const embed = new MessageEmbed()
        .setTitle(`\`${command.name || "Hidden due to lower permissions" }\``)
        .addField(
          "Command Aliases:",
          command.aliases
            ? `\`${command.aliases.join("` `") || "No aliases were found for this comamnd."}\``
            : "No aliases were found for this comamnd."
        )
        .addField(
          "Command Usage:",
          command.usage
            ? `${prefix} [command: string]`
            : `\`${prefix}${command.name}\` [command: string]`
        )
        .addField(
          "Command Description:",
          command.description
            ? command.description
            : "No description for this command."
        )
      .addField(
          "Command Permissions:",
          `\`${command.requiredPermission}\``
            ? `\`${command.requiredPermission}\``
            : "No permissions for this command."
        )
        .setFooter(
          `${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor(client.embedColor)
        return message.channel.send({ embeds: [embed]})
    }
  },
};
            
            
        
      
    

   
    
    
