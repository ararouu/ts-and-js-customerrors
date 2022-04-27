const client = require("../index");
const { MessageEmbed } = require('discord.js');
                                 
const afkSchema = require('../models/afkSchema');
const prefixesSchema = require("../models/prefixesSchema");

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild
    )
        return;
    
    const beanreactSchema = require('../models/beanreactSchema');
    const beanreactData = await beanreactSchema.findOne({
            guildID: message.guild.id,
            userID: message.author.id
        
        })
        if(beanreactData) {
            message.react("🌱")
            beanreactData.delete()
        }
   
            const blacklistSchema = require('../models/blacklistSchema');


        let isblacklisted = await blacklistSchema.findOne({
            userID: message.author.id,
        });
        if(isblacklisted) {
            return;
        }
    //--------------------------------------------------------------afk--------------------------------------------------------------//

    const mention = message.mentions.members.first();

    if(mention) {
        afkSchema.findOne({ guildID: message.guild.id, userID: mention.id }, async (err, data) => {
            if(err) throw err;
            if(data) {							
				message.reply(`**${mention.user.username}** is currently AFK. - ${data.reason}`)
			}
        })
    }

    afkSchema.findOne({ guildID: message.guild.id, userID: message.author.id }, async (err, data) => {
        if(!data) {
            return;
        } else {
            message.reply(`Welcome back! You are no longer AFK.`).then(data.delete())
            try {
                message.member.setNickname(data.nickname)
            } catch {
                return;
            }
        }
    })
let prefix;
    let data = await prefixesSchema.findOne({
        guildID: message.guild.id,
    })
    if(data === null) {
        prefix = client.config.prefix;
    } else {
        prefix = data.prefix
    }
 const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const prefixRegex = new RegExp(`^(${client.user}|${escapeRegex(client.config.prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    
    
    const [ matchedPrefix ] = message.content.match(prefixRegex);
    const [cmd, ...args] = message.content
        .slice(matchedPrefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.execute(client, message, args);
    
  if (!command) return;
if(command.requiredPermission) {
if(!message.member.permissions.has(command.requiredPermission)) return 
    
    }
    

    

});
    
    
   
    

    
